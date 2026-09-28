import "./PressSection.css"

export function PressSection({ content }) {
  const { press } = content
  const { label, headline, items, action } = press

  return (
    <section
      className="press-section"
      id="prensa"
      aria-labelledby="press-title"
    >
      <header className="press-header">
        

        <h2 id="press-title">
          {headline}
        </h2>
      </header>

      <div className="press-list">
        {items.map((item, index) => (
          <a
            className="press-row"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            key={`${item.outlet}-${item.title}`}
          >
            <span
              className="press-row__index"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="press-row__outlet">
              {item.outlet}
            </span>

            <h3 className="press-row__title">
              {item.title}
            </h3>

            {(item.date || item.language) && (
              <span className="press-row__meta">
                {item.date}

                {item.date && item.language && (
                  <span aria-hidden="true"> · </span>
                )}

                {item.language}
              </span>
            )}

            <span
              className="press-row__arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        ))}
      </div>

      {action && (
        <footer className="press-bottom">
          {action.description && (
            <p>
              {action.description}
            </p>
          )}

          <a
            className="press-request"
            href={action.href}
          >
            <span>{action.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      )}
    </section>
  )
}