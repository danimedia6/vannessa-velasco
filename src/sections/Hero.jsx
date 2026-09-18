export function Hero({ content }) {
  const { hero } = content

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">
          Habitat Chief Secretary · Bogotá
        </p>

        <h1 className="hero-title" id="hero-title">
          <span>Vanessa</span>
          <span>Velasco</span>
        </h1>

        <div className="hero-role">
          <p>Secretaria Distrital del Hábitat de Bogotá</p>
          <p>Board Member · IDU · RENOBO · EAAB</p>
        </div>

        <blockquote className="hero-statement">
          <p>
            Housing as a driver of economic and social
            transformation in the Global South.
          </p>
        </blockquote>

        <a className="hero-cta" href="#contacto">
          Hablemos de ciudad
          <span aria-hidden="true">↘</span>
        </a>
        <a className="hero-cta hero-cta--secondary" href="#">
          Press kit
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <figure className="hero-figure">
        <img
          src={hero.image.src}
          alt="Vanessa Velasco"
        />
      </figure>
    </section>
  )
}