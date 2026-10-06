import {
  useRef,
  useState,
} from "react"
import "./InternationalAgenda.css"

export function InternationalAgenda({ content }) {
  const { recognition } = content
  const { label, headline, events } = recognition

  const confirmedEvents = events.filter(
    (event) => !event.status
  )

  const [activeIndex, setActiveIndex] =
    useState(0)

  const agendaListRef = useRef(null)
  

  

  const goToEvent = (index) => {
    const list = agendaListRef.current

    if (!list) return

    const maxScroll =
      list.scrollWidth -
      list.clientWidth

    const totalSteps =
      confirmedEvents.length - 1

    const left =
      totalSteps > 0
        ? (maxScroll / totalSteps) * index
        : 0

    setActiveIndex(index)

    list.scrollTo({
      left,
      behavior: "smooth",
    })
  }

  const getEventData = (event) => {
    const firstMeta = event.meta?.[0] || ""

    const metaParts = firstMeta
      .split("·")
      .map((part) => part.trim())

    const location = metaParts[0] || ""
    const date = metaParts
      .slice(1)
      .join(" · ")

    const locationParts = location
      .split(",")
      .map((part) => part.trim())

    const city =
      locationParts[0] || ""

    const country =
      locationParts
        .slice(1)
        .join(", ")

    const yearMatch =
      firstMeta.match(/\b(19|20)\d{2}\b/)

    const year =
      yearMatch?.[0] || ""

    return {
      city,
      country,
      date,
      year,
      details:
        event.meta?.slice(1) || [],
    }
  }

  const headlineParts =
    headline.trim().split(/\s+/)

  const headlineFirst =
    headlineParts[0]

  const headlineRest =
    headlineParts
      .slice(1)
      .join(" ")

  return (
    <section
      
      className="agenda-section"
      id="agenda"
      aria-labelledby="agenda-title"
    >
      <div className="agenda-shell">

        {/* ===================================================
            INTRO
            =================================================== */}

        <header className="agenda-header">

          <div className="agenda-header__meta">

            <p className="agenda-eyebrow">
              {label}
            </p>

            <p className="agenda-description">
              International conversations,
              knowledge exchange and global
              collaboration around housing,
              cities and urban transformation.
            </p>

          </div>

          <h2
            className="agenda-title"
            id="agenda-title"
          >
            <span>
              {headlineFirst}
            </span>

            <span>
              {headlineRest}
            </span>
          </h2>

        </header>


        {/* ===================================================
            GLOBAL ROUTE
            =================================================== */}

        <nav
          className="agenda-route"
          aria-label="International agenda cities"
        >
          <div
            className="agenda-route__line"
            aria-hidden="true"
          />

          {confirmedEvents.map(
            (event, index) => {
              const {
                city,
                year,
              } = getEventData(event)

              const isActive =
                index === activeIndex

              return (
                <button
                  type="button"
                  className={`agenda-route__stop ${
                    isActive
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() =>
                    goToEvent(index)
                  }
                  key={`${city}-${event.name}`}
                >
                  <span
                    className="agenda-route__dot"
                    aria-hidden="true"
                  />

                  <span
                    className="agenda-route__city"
                  >
                    {city}
                  </span>

                  <span
                    className="agenda-route__year"
                  >
                    {year}
                  </span>
                </button>
              )
            }
          )}
        </nav>


        {/* ===================================================
            EVENT LIST
            =================================================== */}

        <div
        className="agenda-list"
        ref={agendaListRef}
      >

          {confirmedEvents.map(
            (event, index) => {
              const {
                city,
                country,
                date,
                year,
                details,
              } = getEventData(event)

              const isActive =
                index === activeIndex

              return (
                <article
                  className={`agenda-event ${
                    isActive
                      ? "is-active"
                      : ""
                  }`}
                  key={event.name}
                >

                  {/* YEAR */}

                  <div className="agenda-event__year">
                    <span>
                      {year}
                    </span>
                  </div>


                  {/* MAIN */}

                  <div className="agenda-event__main">

                    <div className="agenda-event__place">

                      <span>
                        {city}
                      </span>

                      {country && (
                        <>
                          <span
                            aria-hidden="true"
                          >
                            /
                          </span>

                          <span>
                            {country}
                          </span>
                        </>
                      )}

                    </div>

                    <p className="agenda-event__organization">
                      {event.organization}
                    </p>

                    <h3 className="agenda-event__title">
                      {event.name}
                    </h3>

                  </div>


                  {/* DETAILS */}

                  <div className="agenda-event__details">

                    {date && (
                      <p className="agenda-event__date">
                        {date}
                      </p>
                    )}

                    {details.map(
                      (line, detailIndex) => (
                        <p
                          key={`${line}-${detailIndex}`}
                        >
                          {line}
                        </p>
                      )
                    )}

                  </div>


                  {/* ROLE */}

                  <div className="agenda-event__role">

                    {event.tag && (
                      <span>
                        {event.tag}
                      </span>
                    )}

                    <span
                      className="agenda-event__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </div>

                </article>
              )
            }
          )}

        </div>

      </div>
    </section>
  )
}