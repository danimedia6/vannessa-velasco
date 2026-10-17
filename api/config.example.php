<?php

return [

    /*
     * Set to false in production.
     */
    'dry_run' =>
        true,

    /*
     * Fill after the final domain is known.
     *
     * Example:
     * https://vanessavelasco.com
     * https://www.vanessavelasco.com
     *
     * Empty = origin check disabled.
     */
    'allowed_origins' =>
        [],

    /*
     * Rate limiting:
     * 3 attempts per IP every 10 minutes.
     */
    'rate_limit_max' =>
        3,

    'rate_limit_window' =>
        600,

    /*
     * SMTP
     */
    'smtp_host' =>
        'smtp.hostinger.com',

    'smtp_port' =>
        587,

    'smtp_secure' =>
        'tls',

    'smtp_username' =>
        '',

    'smtp_password' =>
        '',

    /*
     * Sender account on the final domain.
     */
    'from_email' =>
        '',

    'from_name' =>
        'Vanessa Velasco Website',

    /*
     * Where Vanessa receives
     * the contact requests.
     */
    'to_email' =>
        '',

];