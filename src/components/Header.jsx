import { useState } from "react"

export function Header({ content }) {
  const { siteTitle } = content

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

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
            ? "Cerrar navegación"
            : "Abrir navegación"
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() =>
          setMenuOpen((current) => !current)
        }
      >
        <span />
        <span />
      </button>

      {/* LOGO */}

      <a
        className="site-logo"
        href="#main-content"
        aria-label="Inicio"
        onClick={closeMenu}
      >
        {siteTitle.toUpperCase()}
      </a>


      {/* NAV · DESKTOP */}

      <nav
        className="site-nav"
        aria-label="Navegación principal"
      >
        <a href="#perfil">
          PROFILE
        </a>

        <a href="#trayectoria">
          PATH
        </a>

        <a href="#proyectos">
          PROJECTS
        </a>

        <a href="#world-bank">
          WORLD BANK
        </a>

        <a href="#publicaciones">
          PUBLICATIONS
        </a>

        <a href="#agenda">
          SPEAKING
        </a>

        <a href="#prensa">
          PRESS
        </a>

        <a href="#contacto">
          CONTACT
        </a>
      </nav>


      {/* LANGUAGE */}

      <div
        className="language-switcher"
        aria-label="Idioma"
      >
        <a
          href="#main-content"
          aria-current="true"
        >
          ES
        </a>

        <span aria-hidden="true">
          /
        </span>

        <a
          href="#main-content"
          lang="en"
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
        aria-label="Navegación móvil"
      >
        <a
          href="#perfil"
          onClick={closeMenu}
        >
          PROFILE
        </a>

        <a
          href="#trayectoria"
          onClick={closeMenu}
        >
          PATH
        </a>

        <a
          href="#proyectos"
          onClick={closeMenu}
        >
          PROJECTS
        </a>

        <a
          href="#world-bank"
          onClick={closeMenu}
        >
          WORLD BANK
        </a>

        <a
          href="#publicaciones"
          onClick={closeMenu}
        >
          PUBLICATIONS
        </a>

        <a
          href="#agenda"
          onClick={closeMenu}
        >
          SPEAKING
        </a>

        <a
          href="#prensa"
          onClick={closeMenu}
        >
          PRESS
        </a>

        <a
          href="#contacto"
          onClick={closeMenu}
        >
          CONTACT
        </a>
      </nav>

    </header>
  )
}