<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(
    int $status,
    bool $success,
    string $message,
    array $extra = []
): never {
    http_response_code($status);

    echo json_encode(
        array_merge(
            [
                'success' => $success,
                'message' => $message,
            ],
            $extra
        ),
        JSON_UNESCAPED_UNICODE |
        JSON_UNESCAPED_SLASHES
    );

    exit;
}

function textLength(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }

    return strlen($value);
}

function cleanSingleLine(
    array $data,
    string $key,
    int $maxLength
): string {
    $value = $data[$key] ?? '';

    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);

    $value =
        preg_replace(
            '/[\r\n\t]+/u',
            ' ',
            $value
        ) ?? $value;

    $value = strip_tags($value);

    if (textLength($value) > $maxLength) {
        respond(
            422,
            false,
            'Invalid form data.'
        );
    }

    return $value;
}

function cleanMultiline(
    array $data,
    string $key,
    int $maxLength
): string {
    $value = $data[$key] ?? '';

    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);
    $value = strip_tags($value);

    if (textLength($value) > $maxLength) {
        respond(
            422,
            false,
            'Invalid form data.'
        );
    }

    return $value;
}

function normalizeOrigin(string $origin): string
{
    return strtolower(
        rtrim(
            trim($origin),
            '/'
        )
    );
}

function validateOrigin(array $allowedOrigins): void
{
    if ($allowedOrigins === []) {
        return;
    }

    $origin =
        $_SERVER['HTTP_ORIGIN']
        ?? '';

    if ($origin === '') {
        return;
    }

    $normalizedAllowed =
        array_map(
            'normalizeOrigin',
            $allowedOrigins
        );

    if (
        !in_array(
            normalizeOrigin($origin),
            $normalizedAllowed,
            true
        )
    ) {
        respond(
            403,
            false,
            'Request not allowed.'
        );
    }
}

function enforceRateLimit(
    string $clientIp,
    int $maxRequests,
    int $windowSeconds
): void {
    $directory =
        sys_get_temp_dir()
        . DIRECTORY_SEPARATOR
        . 'vanessa-contact-rate-limit';

    if (
        !is_dir($directory)
        &&
        !mkdir(
            $directory,
            0700,
            true
        )
        &&
        !is_dir($directory)
    ) {
        error_log(
            'Contact form: unable to create rate-limit directory.'
        );

        respond(
            500,
            false,
            'Unable to send message.'
        );
    }

    $filename =
        $directory
        . DIRECTORY_SEPARATOR
        . hash(
            'sha256',
            $clientIp
        )
        . '.json';

    $handle =
        @fopen(
            $filename,
            'c+'
        );

    if ($handle === false) {
        error_log(
            'Contact form: unable to open rate-limit file.'
        );

        respond(
            500,
            false,
            'Unable to send message.'
        );
    }

    if (!flock($handle, LOCK_EX)) {
        fclose($handle);

        respond(
            500,
            false,
            'Unable to send message.'
        );
    }

    rewind($handle);

    $contents =
        stream_get_contents($handle);

    $timestamps = [];

    if (
        is_string($contents)
        &&
        $contents !== ''
    ) {
        $decoded =
            json_decode(
                $contents,
                true
            );

        if (is_array($decoded)) {
            $timestamps = $decoded;
        }
    }

    $now = time();

    $timestamps =
        array_values(
            array_filter(
                $timestamps,
                static function ($timestamp) use (
                    $now,
                    $windowSeconds
                ): bool {
                    return
                        is_int($timestamp)
                        &&
                        $timestamp >
                            (
                                $now -
                                $windowSeconds
                            );
                }
            )
        );

    $limited =
        count($timestamps)
        >= $maxRequests;

    if (!$limited) {
        $timestamps[] = $now;

        rewind($handle);
        ftruncate($handle, 0);

        fwrite(
            $handle,
            json_encode($timestamps)
        );

        fflush($handle);
    }

    flock(
        $handle,
        LOCK_UN
    );

    fclose($handle);

    if ($limited) {
        respond(
            429,
            false,
            'Too many requests. Please try again later.'
        );
    }
}


/* =========================================================
   METHOD
   ========================================================= */

if (
    ($_SERVER['REQUEST_METHOD'] ?? '')
    !== 'POST'
) {
    header('Allow: POST');

    respond(
        405,
        false,
        'Method not allowed.'
    );
}


/* =========================================================
   CONFIG
   ========================================================= */

$configPath =
    getenv('CONTACT_CONFIG')
    ?: __DIR__ . '/config.php';

if (!is_file($configPath)) {
    error_log(
        'Contact form: config.php not found.'
    );

    respond(
        500,
        false,
        'Unable to send message.'
    );
}

$config =
    require $configPath;

if (!is_array($config)) {
    error_log(
        'Contact form: invalid configuration.'
    );

    respond(
        500,
        false,
        'Unable to send message.'
    );
}

validateOrigin(
    $config['allowed_origins']
    ?? []
);


/* =========================================================
   REQUEST SIZE
   ========================================================= */

$contentLength =
    (int) (
        $_SERVER['CONTENT_LENGTH']
        ?? 0
    );

if ($contentLength > 20000) {
    respond(
        413,
        false,
        'Request too large.'
    );
}


/* =========================================================
   JSON
   ========================================================= */

$rawInput =
    file_get_contents(
        'php://input'
    );

if (
    !is_string($rawInput)
    ||
    strlen($rawInput) > 20000
) {
    respond(
        400,
        false,
        'Invalid request.'
    );
}

$data =
    json_decode(
        $rawInput,
        true
    );

if (!is_array($data)) {
    respond(
        400,
        false,
        'Invalid request.'
    );
}


/* =========================================================
   HONEYPOT
   ========================================================= */

$honeypot =
    $data['office_fax']
    ?? '';

if (
    is_string($honeypot)
    &&
    trim($honeypot) !== ''
) {
    /*
     * Bot detected.
     * Return success deliberately.
     */

    respond(
        200,
        true,
        'Message received.'
    );
}


/* =========================================================
   RATE LIMIT
   ========================================================= */

$clientIp =
    $_SERVER['REMOTE_ADDR']
    ?? 'unknown';

enforceRateLimit(
    $clientIp,
    (int) (
        $config['rate_limit_max']
        ?? 3
    ),
    (int) (
        $config['rate_limit_window']
        ?? 600
    )
);


/* =========================================================
   VALIDATION
   ========================================================= */

$name =
    cleanSingleLine(
        $data,
        'name',
        120
    );

$email =
    cleanSingleLine(
        $data,
        'email',
        180
    );

$organization =
    cleanSingleLine(
        $data,
        'organization',
        180
    );

$purpose =
    cleanSingleLine(
        $data,
        'purpose',
        120
    );

$message =
    cleanMultiline(
        $data,
        'message',
        5000
    );

if (
    $name === ''
    ||
    $email === ''
    ||
    $message === ''
) {
    respond(
        422,
        false,
        'Please complete all required fields.'
    );
}

if (
    !filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    )
) {
    respond(
        422,
        false,
        'Please enter a valid email address.'
    );
}


/* =========================================================
   LOCAL DRY RUN
   ========================================================= */

if (
    ($config['dry_run'] ?? false)
    === true
) {
    respond(
        200,
        true,
        'Message accepted.',
        [
            'dryRun' => true,
        ]
    );
}


/* =========================================================
   PHPMAILER
   ========================================================= */

$autoloadPath =
    getenv('CONTACT_AUTOLOAD')
    ?: dirname(__DIR__)
        . '/vendor/autoload.php';

if (!is_file($autoloadPath)) {
    error_log(
        'Contact form: Composer autoload not found.'
    );

    respond(
        500,
        false,
        'Unable to send message.'
    );
}

require $autoloadPath;


/* =========================================================
   SMTP CONFIG VALIDATION
   ========================================================= */

$requiredConfig = [
    'smtp_host',
    'smtp_port',
    'smtp_username',
    'smtp_password',
    'from_email',
    'from_name',
    'to_email',
];

foreach (
    $requiredConfig
    as $key
) {
    if (
        !isset($config[$key])
        ||
        $config[$key] === ''
    ) {
        error_log(
            'Contact form: missing SMTP setting: '
            . $key
        );

        respond(
            500,
            false,
            'Unable to send message.'
        );
    }
}


/* =========================================================
   EMAIL CONTENT
   ========================================================= */

$escape =
    static function (
        string $value
    ): string {
        return htmlspecialchars(
            $value,
            ENT_QUOTES |
            ENT_SUBSTITUTE,
            'UTF-8'
        );
    };

$safeName =
    $escape($name);

$safeEmail =
    $escape($email);

$safeOrganization =
    $escape(
        $organization !== ''
            ? $organization
            : '—'
    );

$safePurpose =
    $escape(
        $purpose !== ''
            ? $purpose
            : 'General inquiry'
    );

$safeMessage =
    nl2br(
        $escape($message)
    );

$htmlBody = <<<HTML
<!doctype html>
<html lang="en">
<body
    style="
        margin:0;
        padding:24px;
        font-family:Arial,Helvetica,sans-serif;
        color:#171716;
        background:#f5f3ef;
    "
>
    <div
        style="
            max-width:640px;
            margin:0 auto;
            padding:32px;
            background:#ffffff;
            border:1px solid #dedbd5;
        "
    >
        <p
            style="
                margin:0 0 8px;
                font-size:12px;
                letter-spacing:.12em;
                text-transform:uppercase;
                color:#77736c;
            "
        >
            Vanessa Velasco Website
        </p>

        <h1
            style="
                margin:0 0 28px;
                font-size:24px;
                font-weight:500;
            "
        >
            New contact request
        </h1>

        <p><strong>Name:</strong> {$safeName}</p>
        <p><strong>Email:</strong> {$safeEmail}</p>
        <p><strong>Organization:</strong> {$safeOrganization}</p>
        <p><strong>Purpose:</strong> {$safePurpose}</p>

        <hr
            style="
                margin:28px 0;
                border:0;
                border-top:1px solid #dedbd5;
            "
        >

        <p
            style="
                margin-bottom:8px;
            "
        >
            <strong>Message</strong>
        </p>

        <div
            style="
                line-height:1.6;
            "
        >
            {$safeMessage}
        </div>
    </div>
</body>
</html>
HTML;

$plainBody =
    "New contact request\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n"
    . "Organization: "
    . (
        $organization !== ''
            ? $organization
            : '—'
    )
    . "\n"
    . "Purpose: "
    . (
        $purpose !== ''
            ? $purpose
            : 'General inquiry'
    )
    . "\n\n"
    . "Message:\n"
    . $message;


/* =========================================================
   SEND
   ========================================================= */

try {
    $mail =
        new PHPMailer(true);

    $mail->isSMTP();

    $mail->Host =
        (string) $config['smtp_host'];

    $mail->SMTPAuth = true;

    $mail->Username =
        (string) $config['smtp_username'];

    $mail->Password =
        (string) $config['smtp_password'];

    $mail->Port =
        (int) $config['smtp_port'];

    $secure =
        strtolower(
            (string) (
                $config['smtp_secure']
                ?? 'tls'
            )
        );

    if (
        $secure === 'ssl'
        ||
        $secure === 'smtps'
    ) {
        $mail->SMTPSecure =
            PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure =
            PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->Timeout = 15;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        (string) $config['from_email'],
        (string) $config['from_name']
    );

    $mail->addAddress(
        (string) $config['to_email']
    );

    /*
     * Clicking Reply in Gmail will reply
     * directly to the visitor.
     */
    $mail->addReplyTo(
        $email,
        $name
    );

    $subjectPurpose =
        $purpose !== ''
            ? $purpose
            : 'General inquiry';

    $mail->Subject =
        'Website contact · '
        . $subjectPurpose;

    $mail->isHTML(true);

    $mail->Body =
        $htmlBody;

    $mail->AltBody =
        $plainBody;

    $mail->send();

    respond(
        200,
        true,
        'Message sent successfully.'
    );
} catch (Throwable $error) {
    error_log(
        'Contact form mail error: '
        . $error->getMessage()
    );

    respond(
        500,
        false,
        'Unable to send message.'
    );
}