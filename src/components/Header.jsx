export function Header({ content }) {
  const { siteTitle } = content

  return (
    <header className="site-header">
      <a className="site-logo" href="#main-content" aria-label="Inicio">
        {siteTitle.toUpperCase()}
      </a>

      <nav className="site-nav" aria-label="Navegación principal">
        <a href="#perfil">Profile</a>
        <a href="#trayectoria">Path</a>
        <a href="#proyectos">Projects</a>
        <a href="#world-bank">World Bank</a>
        <a href="#publicaciones">Publications</a>
        <a href="#agenda">Speaking</a>
        <a href="#prensa">Press</a>
        <a href="#contacto">Contact</a>
      </nav>

      <div className="language-switcher" aria-label="Idioma">
        <a href="#main-content" aria-current="true">ES</a>
        <span aria-hidden="true">/</span>
        <a href="#main-content" lang="en">EN</a>
      </div>
    </header>
  )
}
