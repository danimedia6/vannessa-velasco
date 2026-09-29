export function Header({ content }) {
  const { siteTitle } = content

  return (
    <header className="site-header">
      <a className="site-logo" href="#main-content" aria-label="Inicio">
        {siteTitle.toUpperCase()}
      </a>

      <nav className="site-nav" aria-label="Navegación principal">
        <a href="#perfil">PROFILE</a>
        <a href="#trayectoria">PATH</a>
        <a href="#proyectos">PROJECTS</a>
        <a href="#world-bank">WORLD BANK</a>
        <a href="#publicaciones">PUBLICATIONS</a>
        <a href="#agenda">SPEAKING</a>
        <a href="#prensa">PRESS</a>
        <a href="#contacto">CONTACT</a>
      </nav>

      <div className="language-switcher" aria-label="Idioma">
        <a href="#main-content" aria-current="true">ES</a>
        <span aria-hidden="true">/</span>
        <a href="#main-content" lang="en">EN</a>
      </div>
    </header>
  )
}
