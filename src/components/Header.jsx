import { useState } from "react"

export function Header({ content }) {
  const {
    siteTitle,
    navigation,
  } = content

  const [menuOpen, setMenuOpen] =
    useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const isSpanish =
    window.location.pathname === "/es" ||
    window.location.pathname.startsWith(
      "/es/"
    )

  const currentHash =
    window.location.hash || ""

  const englishUrl =
    `/${currentHash}`

  const spanishUrl =
    `/es/${currentHash}`

  return (
    <header className="site-header">

      {/* HAMBURGER · MOBILE */}

      <button
        className={`mobile-menu-toggle ${
          menuOpen ? "is-open" : ""
        }`}
        type="button"
        aria-label={
          menuOpen
            ? navigation.menuCloseLabel
            : navigation.menuOpenLabel
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() =>
          setMenuOpen(
            (current) => !current
          )
        }
      >
        <span />
        <span />
      </button>


      {/* LOGO */}

      <a
        className="site-logo"
        href="#main-content"
        aria-label={
          navigation.homeLabel
        }
        onClick={closeMenu}
      >
        {siteTitle.toUpperCase()}
      </a>


      {/* NAV · DESKTOP */}

      <nav
        className="site-nav"
        aria-label={
          navigation.mainAriaLabel
        }
      >
        {navigation.items.map(
          (item) => (
            <a
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          )
        )}
      </nav>


      {/* LANGUAGE */}

      <div
        className="language-switcher"
        aria-label={
          navigation.languageAriaLabel
        }
      >
        <a
          href={spanishUrl}
          lang="es"
          hrefLang="es"
          aria-current={
            isSpanish
              ? "page"
              : undefined
          }
          onClick={closeMenu}
        >
          ES
        </a>

        <span aria-hidden="true">
          /
        </span>

        <a
          href={englishUrl}
          lang="en"
          hrefLang="en"
          aria-current={
            !isSpanish
              ? "page"
              : undefined
          }
          onClick={closeMenu}
        >
          EN
        </a>
      </div>


      {/* NAV · MOBILE */}

      <nav
        className={`mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
        id="mobile-navigation"
        aria-label={
          navigation.mobileAriaLabel
        }
      >
        {navigation.items.map(
          (item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          )
        )}
      </nav>

    </header>
  )
}