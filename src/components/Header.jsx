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

  const pathname =
    window.location.pathname

  const isSpanish =
    pathname === "/es" ||
    pathname.startsWith("/es/")

  const isPressKit =
    pathname === "/press-kit" ||
    pathname.startsWith("/press-kit/") ||
    pathname === "/es/press-kit" ||
    pathname.startsWith("/es/press-kit/")

  const currentHash =
    window.location.hash || ""

  /*
   * Selector de idioma
   *
   * HOME:
   * /#perfil ↔ /es/#perfil
   *
   * PRESS KIT:
   * /press-kit/ ↔ /es/press-kit/
   */
  const englishUrl =
    isPressKit
      ? "/press-kit/"
      : `/${currentHash}`

  const spanishUrl =
    isPressKit
      ? "/es/press-kit/"
      : `/es/${currentHash}`

  /*
   * Desde el Press Kit, los enlaces
   * de navegación deben regresar
   * al home correspondiente.
   */
  const getNavigationHref = (
    href
  ) => {
    if (!isPressKit) {
      return href
    }

    return isSpanish
      ? `/es/${href}`
      : `/${href}`
  }

  /*
   * El logo en el home sigue llevando
   * al inicio de la página.
   *
   * Desde Press Kit regresa al home.
   */
  const logoHref =
    isPressKit
      ? isSpanish
        ? "/es/"
        : "/"
      : "#main-content"

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
        href={logoHref}
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
              href={getNavigationHref(
                item.href
              )}
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
              href={getNavigationHref(
                item.href
              )}
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