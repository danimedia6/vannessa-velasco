import { useState } from "react"
import "./InternationalAgenda.css"

export function InternationalAgenda({ content }) {
  const { recognition } = content
  const { label, headline, events } = recognition

  const confirmedEvents = events.filter(
    (event) => !event.status
  )

  const [activeIndex, setActiveIndex] = useState(0)

  const getLocation = (event) => {
    const firstMeta = event.meta?.[0] || ""

    const location = firstMeta
      .split("·")[0]
      ?.trim()

    const parts = location
      .split(",")
      .map((part) => part.trim())

    return {
      city: parts[0] || "",
      country: parts.slice(1).join(", "),
    }
  }

  const activeEvent =
    confirmedEvents[activeIndex]

  const activeLocation =
    getLocation(activeEvent)

  return (
    <section
      className="agenda-section"
      id="agenda"
      aria-labelledby="agenda-title"
    >
      <div className="agenda-layout">

        {/* LEFT */}

        <header className="agenda-intro">
          

          <h2 id="agenda-title">
            {headline}
          </h2>

          <p className="agenda-description">
            International conversations,
            knowledge exchange and global
            collaboration around housing,
            cities and urban transformation.
          </p>
        </header>

        {/* RIGHT */}

        <div className="agenda-content">

          {/* CITY NAVIGATION */}

          <div
            className="agenda-cities"
            role="tablist"
            aria-label="International agenda cities"
          >
            {confirmedEvents.map(
              (event, index) => {
                const { city } =
                  getLocation(event)

                const isActive =
                  index === activeIndex

                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`agenda-city ${
                      isActive
                        ? "is-active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    key={`${city}-${event.name}`}
                  >
                    <span>
                      {String(index + 1)
                        .padStart(2, "0")}
                    </span>

                    {city}
                  </button>
                )
              }
            )}
          </div>

          {/* ACTIVE EVENT */}

          <article
            className="agenda-panel"
            key={activeEvent.name}
            role="tabpanel"
          >
            <div className="agenda-panel__location">
              <p>
                {activeLocation.country}
              </p>

              <h3>
                {activeLocation.city}
              </h3>
            </div>

            <div className="agenda-panel__body">

              <p className="agenda-panel__organization">
                {activeEvent.organization}
              </p>

              <h4>
                {activeEvent.name}
              </h4>

              <div className="agenda-panel__meta">
                {activeEvent.meta?.map(
                  (line, index) => (
                    <p
                      key={`${line}-${index}`}
                    >
                      {line}
                    </p>
                  )
                )}
              </div>

              {activeEvent.tag && (
                <div className="agenda-panel__role">
                  <span
                    aria-hidden="true"
                    className="agenda-panel__dot"
                  />

                  <span>
                    {activeEvent.tag}
                  </span>
                </div>
              )}

            </div>
          </article>

        </div>
      </div>
    </section>
  )
}