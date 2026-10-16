export function LanguageSwitcher() {
  const isSpanish =
    window.location.pathname === "/es" ||
    window.location.pathname.startsWith(
      "/es/"
    )

  const hash =
    window.location.hash || ""

  return (
    <div
      className="language-switcher"
      aria-label="Language"
    >
      <a
        href={`/${hash}`}
        lang="en"
        hrefLang="en"
        aria-current={
          !isSpanish
            ? "page"
            : undefined
        }
      >
        EN
      </a>

      <span aria-hidden="true">
        /
      </span>

      <a
        href={`/es/${hash}`}
        lang="es"
        hrefLang="es"
        aria-current={
          isSpanish
            ? "page"
            : undefined
        }
      >
        ES
      </a>
    </div>
  )
}