export function FeaturedProjectsSection({ content }) {
  const { policyWork } = content

  return (
    <section
      className="projects-section"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      {/* Ruptura editorial */}
      <div className="policy-break">
        <div className="policy-break__inner">
          <p className="policy-break__eyebrow">
            Policy Work
          </p>

          <h2
            className="policy-break__title"
            id="projects-title"
          >
            {policyWork.headline}
          </h2>

          <p className="policy-break__statement">
            {policyWork.framing}
          </p>
        </div>
      </div>

      {/* Contenido de proyectos */}
      <div className="project-list">
        {policyWork.programs.map((project, index) => (
          <article
            className="featured-project"
            data-orientation={
              index % 2 === 0 ? 'image-right' : 'image-left'
            }
            key={project.name}
          >
            <div className="project-copy">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.name}</h3>

              <p>{project.description}</p>
            </div>

            <div
              className="project-media"
              aria-label={`Imagen pendiente para ${project.name}`}
            >
               <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                />
            </div>

            <dl className="project-stats">
              {project.stats.map((stat) => (
                <div
                  key={`${project.name}-${stat.value}-${stat.label}`}
                >
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      {/* Resultados de política */}

        <div className="policy-results" aria-label="Policy results">
          {policyWork.results.map((result, index) => (
            <article
              className="policy-result"
              key={`${result.value}-${index}`}
            >
              <span
                className="policy-result__index"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className="policy-result__value">
                {result.value}
              </p>

              <p className="policy-result__label">
                {result.label}
              </p>
            </article>
          ))}
        </div>
      
    </section>
  )
}