import "./FeaturedProjectsSection.css"
import { ProjectImageAccordion } from "../components/ProjectImageAccordion"

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

        {policyWork.programs.map(
          (project, index) => {

            const hasGallery =
              Array.isArray(project.images) &&
              project.images.length > 0

            return (
              <article
                className="featured-project"
                data-orientation={
                  index % 2 === 0
                    ? "image-right"
                    : "image-left"
                }
                key={project.name}
              >

                {/* COPY */}

                <div className="project-copy">

                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>
                    {project.name}
                  </h3>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        {project.link.label}
                      </span>

                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}

                  <p>
                    {project.description}
                  </p>

                </div>


                {/* MEDIA */}

                <div
                  className={`project-media ${
                    hasGallery
                      ? "project-media--accordion"
                      : ""
                  }`}
                  aria-label={
                    hasGallery
                      ? `Galería de ${project.name}`
                      : `Imagen de ${project.name}`
                  }
                >

                  {hasGallery ? (

                    <ProjectImageAccordion
                      images={project.images}
                    />

                  ) : (

                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                    />

                  )}

                </div>


                {/* STATS */}

                <dl className="project-stats">

                  {project.stats.map(
                    (stat) => (
                      <div
                        key={`${project.name}-${stat.value}-${stat.label}`}
                      >
                        <dt>
                          {stat.value}
                        </dt>

                        <dd>
                          {stat.label}
                        </dd>
                      </div>
                    )
                  )}

                </dl>

              </article>
            )
          }
        )}

      </div>


      {/* Resultados de política */}

      <div
        className="policy-results"
        aria-label="Policy results"
      >

        {policyWork.results.map(
          (result, index) => (
            <article
              className="policy-result"
              key={`${result.value}-${index}`}
            >

              <span
                className="policy-result__index"
                aria-hidden="true"
              >
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <p className="policy-result__value">
                {result.value}
              </p>

              <p className="policy-result__label">
                {result.label}
              </p>

            </article>
          )
        )}

      </div>

    </section>
  )
}