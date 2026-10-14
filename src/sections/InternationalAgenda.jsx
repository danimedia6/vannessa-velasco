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



  const years = [
    ...new Set(
      confirmedEvents
        .map((event) => event.year)
        .filter(Boolean)
    ),
  ].sort(
    (a, b) =>
      Number(a) - Number(b)
  )

  const [activeYear, setActiveYear] =
    useState(
      years[years.length - 1] || ""
    )

  const [expandedEvent, setExpandedEvent] =
  useState(null)


  const eventsByYear =
    years.reduce((groups, year) => {
      groups[year] =
        confirmedEvents.filter(
          (event) =>
            event.year === year
        )

      return groups
    }, {})

  const agendaListRef = useRef(null)
  
  const goToYear = (year) => {
    const list =
      agendaListRef.current

    if (!list) return

    const index =
      years.indexOf(year)

    setActiveYear(year)
    setExpandedEvent(null)

    list.scrollTo({
      left:
        list.clientWidth * index,
      behavior: "smooth",
    })
  }

  const getEventData = (event) => {
    const firstMeta =
      event.meta?.[0] || ""

    const locationParts =
      firstMeta
        .split(",")
        .map((part) => part.trim())

    const parsedCity =
      locationParts[0] || ""

    const country =
      locationParts
        .slice(1)
        .join(", ")

    return {
      city:
        event.place ||
        parsedCity,

      country,

      year:
        event.year || "",

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

  const toggleEvent = (eventKey) => {
    setExpandedEvent((current) =>
      current === eventKey
        ? null
        : eventKey
    )
  }

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
          aria-label="International agenda years"
        >
          <div
            className="agenda-route__line"
            aria-hidden="true"
          />

          {years.map((year) => {
            const eventCount =
              confirmedEvents.filter(
                (event) =>
                  event.year === year
              ).length

            const isActive =
              year === activeYear

            return (
              <button
                type="button"
                className={`agenda-route__stop ${
                  isActive
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  goToYear(year)
                }
                key={year}
              >
                <span
                  className="agenda-route__dot"
                  aria-hidden="true"
                />

                <span className="agenda-route__city">
                  {year}
                </span>

                <span className="agenda-route__year">
                  {eventCount}{" "}
                  {eventCount === 1
                    ? "event"
                    : "events"}
                </span>
              </button>
            )
          })}
        </nav>


        {/* ===================================================
            YEAR CAROUSEL
            =================================================== */}

        <div
          className="agenda-list"
          ref={agendaListRef}
        >
          {years.map((year) => {
            const yearEvents =
              eventsByYear[year] || []

            return (
              <section
                className="agenda-year-slide"
                key={year}
                aria-label={`International agenda ${year}`}
              >

                


                <div
                  className="agenda-year-events"
                  style={{
                    "--agenda-columns":
                      Math.max(yearEvents.length, 3),
                  }}
                >

                  {yearEvents.map(
                    (event, index) => {
                      const {
                        city,
                        country,
                        year: eventYear,
                        details,
                      } = getEventData(event)

                      const eventKey =
                        `${year}-${index}`

                      const isExpanded =
                        expandedEvent === eventKey

                      return (
                        <article
                          className={`agenda-event ${
                            isExpanded
                              ? "is-expanded"
                              : ""
                          }`}
                          key={`${eventYear}-${city}-${event.name}-${index}`}
                          onClick={() =>
                            toggleEvent(eventKey)
                          }
                          onKeyDown={(event) => {
                            if (
                              event.key === "Enter" ||
                              event.key === " "
                            ) {
                              event.preventDefault()
                              toggleEvent(eventKey)
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isExpanded}
                        >

                          {/* YEAR */}

                          <div className="agenda-event__year">
                            <span>
                              {eventYear}
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

              </section>
            )
          })}
        </div>

      </div>
    </section>
  )
}