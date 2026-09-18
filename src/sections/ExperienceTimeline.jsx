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
          <span>From</span>
          <span>Bogotá</span>
          <em>to the world.</em>
        </h2>
      </header>

      <div className="timeline-track">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.period}>
            <span className="timeline-node" aria-hidden="true" />

            <p className="timeline-period">
              {item.period}
            </p>

            <p className="timeline-role">
              {item.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}