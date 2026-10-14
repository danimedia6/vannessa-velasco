import "./ExperienceTimeline.css"

export function ExperienceTimeline({ content }) {
  const { timeline } = content.experience

  return (
    <section
      className="experience-timeline"
      id="trayectoria"
      aria-labelledby="timeline-title"
    >
      <header className="timeline-header">
        <h2 id="timeline-title">
          <span>From Bogotá</span>
          
          <em>to the world</em>
        </h2>
      </header>

      <div className="timeline-track">
        {timeline.map((item, index) => (
          <article
            className="timeline-item"
            key={`${item.period}-${item.role}`}
            tabIndex={0}
          >
            <span
              className="timeline-node"
              aria-hidden="true"
            />

            <p className="timeline-period">
              {item.period}
            </p>

            <p className="timeline-role">
              {item.role}
            </p>

            {item.detail && (
              <div
                className="timeline-popover"
                role="tooltip"
              >
                <span className="timeline-popover__period">
                  {item.period}
                </span>

                <strong className="timeline-popover__title">
                  {item.role}
                </strong>

                <p className="timeline-popover__text">
                  {item.detail}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}