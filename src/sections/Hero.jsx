import "./Hero.css"

export function Hero({ content }) {
  const { hero } = content

  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">

        <p className="hero-kicker">
          {hero.eyebrow}
        </p>

        <h1
          className="hero-title"
          id="hero-title"
        >
          <span>{hero.name.first}</span>
          <span>{hero.name.last}</span>
        </h1>


        {/* ROLE + ACTIONS */}

        <div className="hero-meta-row">

          <div className="hero-role">
            {hero.roles.map((role) => (
              <p key={role}>
                {role}
              </p>
            ))}
          </div>

          <div className="hero-actions">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                className={`hero-cta ${
                  action.download
                    ? "hero-cta--secondary"
                    : ""
                }`}
                href={action.href}
                download={
                  action.download ||
                  undefined
                }
              >
                <span>
                  {action.label}
                </span>

                <span aria-hidden="true">
                  {action.download
                    ? "↓"
                    : "↘"}
                </span>
              </a>
            ))}
          </div>

        </div>


        {/* IMAGE */}

        <figure className="hero-figure">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
          />
        </figure>


        {/* STATEMENT */}

        <blockquote className="hero-statement">
          <p>{hero.tagline}</p>
        </blockquote>

      </div>
    </section>
  )
}