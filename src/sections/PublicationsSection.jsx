import { useMemo, useState } from "react"
import "./PublicationsSection.css"

export function PublicationsSection({ content }) {
  const { publications } = content
  const {
    label,
    headline,
    featured,
    filters,
    items,
    note,
  } = publications

  const [activeFilter, setActiveFilter] = useState("All")

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items
    }

    return items.filter((item) =>
      item.categories?.includes(activeFilter)
    )
  }, [activeFilter, items])

  return (
    <section
      className="publications-section"
      id="publicaciones"
      aria-labelledby="publications-title"
    >
      <header className="publications-header">
        <p className="publications-eyebrow">
          {label}
        </p>

        <h2 id="publications-title">
          {headline}
        </h2>
      </header>

      <article className="publications-featured">
        <div className="publications-featured-copy">
          <p className="publications-featured-label">
            {featured.label}
          </p>

          <h3>
            {featured.title}
          </h3>

          <p className="publications-featured-meta">
            {featured.meta}
          </p>
        </div>

        {featured.file && (
          <a
            className="publications-featured-file"
            href={featured.file.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{featured.file.label}</span>
            <span aria-hidden="true">↓</span>
          </a>
        )}
      </article>

      <nav
        className="publications-filters"
        aria-label="Filter publications"
      >
        {filters.map((filter) => {
          const active = filter === activeFilter

          return (
            <button
              key={filter}
              type="button"
              className={`publications-filter ${
                active ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={active}
            >
              {filter}
            </button>
          )
        })}
      </nav>

      {filteredItems.length > 0 ? (
        <div className="publications-grid">
          {filteredItems.map((item, index) => (
            <article
              className="publication-card"
              key={`${item.title}-${index}`}
            >
              <div className="publication-card-top">
                <p className="publication-type">
                  {item.type}
                </p>

                <span className="publication-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="publication-source">
                {item.source}
              </p>

              <h3>
                {item.title}
              </h3>

              <p className="publication-excerpt">
                {item.excerpt}
              </p>

              {item.file && (
                <a
                  className="publication-file"
                  href={item.file.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.file.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="publications-empty">
          <p>
            New work in this category will be added as it
            is published.
          </p>
        </div>
      )}

      {note && (
        <footer className="publications-note">
          <p>{note}</p>
        </footer>
      )}
    </section>
  )
}