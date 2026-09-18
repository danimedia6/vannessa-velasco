export function Header({ content }) {
  const { siteTitle } = content

  return (
    <header className="site-header">
      <a className="site-logo" href="#main-content" aria-label="Inicio">
        {siteTitle.toUpperCase()}
      </a>

      <nav className="site-nav" aria-label="Principal">
        <a href="#perfil">Perfil</a>
        <a href="#impacto">Impacto</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#trayectoria">Trayectoria</a>
      </nav>

      <div className="language-switcher" aria-label="Idioma">
        <a href="#main-content" aria-current="true">ES</a>
        <span aria-hidden="true">/</span>
        <a href="#main-content" lang="en">EN</a>
      </div>
    </header>
  )
}
