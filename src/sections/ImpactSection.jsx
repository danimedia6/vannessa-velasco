export function ImpactSection({ content }) {
  const { impact } = content

  return (
    <section className="impact-section" aria-label="Impacto">
      <div className="impact-list">
        {impact.metrics.map((metric) => (
          <div className="impact-item" key={`${metric.value}-${metric.label}`}>
            <strong className="impact-value">
              {metric.value}
            </strong>

            <span className="impact-label">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}