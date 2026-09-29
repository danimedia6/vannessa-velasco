import {
  useEffect,
  useMemo,
  useState,
} from "react"

import "./PublicationsSection.css"


export function PublicationsSection({ content }) {
  const { publications } = content

  const {
    headline,
    featured,
    filters,
    items,
    note,
  } = publications


  /* =========================================================
     STATE
     ========================================================= */

  // Desktop mantiene All seleccionado por defecto
  const [activeFilter, setActiveFilter] =
    useState("All")

  // En mobile no mostramos publicaciones
  // hasta que el usuario seleccione un filtro
  const [
    mobileFilterSelected,
    setMobileFilterSelected,
  ] = useState(false)

  // Publicación abierta en mobile
  const [
    openPublication,
    setOpenPublication,
  ] = useState(null)

  const [isMobile, setIsMobile] =
    useState(false)


  /* =========================================================
     MOBILE DETECTION
     ========================================================= */

  useEffect(() => {
    const media = window.matchMedia(
      "(max-width: 760px)"
    )

    const update = () => {
      setIsMobile(media.matches)
    }

    update()

    media.addEventListener(
      "change",
      update
    )

    return () => {
      media.removeEventListener(
        "change",
        update
      )
    }
  }, [])


  /* =========================================================
     FILTERING
     ========================================================= */

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items
    }

    return items.filter((item) =>
      item.categories?.includes(
        activeFilter
      )
    )
  }, [activeFilter, items])


  /* Desktop siempre muestra publicaciones.
     Mobile solo después de seleccionar filtro. */

  const showPublications =
    !isMobile || mobileFilterSelected


  /* =========================================================
     FILTER CLICK
     ========================================================= */

  const handleFilterClick = (filter) => {
    if (
      isMobile &&
      mobileFilterSelected &&
      activeFilter === filter
    ) {
      setMobileFilterSelected(false)
      setOpenPublication(null)
      return
    }

    setActiveFilter(filter)

    if (isMobile) {
      setMobileFilterSelected(true)
    }

    setOpenPublication(null)
  }


  /* =========================================================
     PUBLICATION CLICK · MOBILE ONLY
     ========================================================= */

  const handlePublicationClick = (
    item,
    event
  ) => {
    if (!isMobile) return

    // Si hizo clic en el enlace,
    // no cerrar/abrir la tarjeta
    if (event.target.closest("a")) {
      return
    }

    setOpenPublication((current) =>
      current === item.title
        ? null
        : item.title
    )
  }


  return (
    <section
      className="publications-section"
      id="publicaciones"
      aria-labelledby="publications-title"
    >
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="publications-header">
        <h2 id="publications-title">
          {headline}
        </h2>
      </header>


      {/* =====================================================
          FEATURED
          ===================================================== */}

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
            <span>
              {featured.file.label}
            </span>

            <span aria-hidden="true">
              ↓
            </span>
          </a>
        )}
      </article>


      {/* =====================================================
          FILTERS
          ===================================================== */}

      <nav
        className="publications-filters"
        aria-label="Filter publications"
      >
        {filters.map((filter) => {
          /*
           * Desktop:
           * All aparece activo inicialmente.
           *
           * Mobile:
           * nada aparece activo hasta
           * que el usuario toque un filtro.
           */

          const active =
            filter === activeFilter &&
            (
              !isMobile ||
              mobileFilterSelected
            )

          return (
            <button
              key={filter}
              type="button"
              className={
                `publications-filter ${
                  active
                    ? "is-active"
                    : ""
                }`
              }
              onClick={() =>
                handleFilterClick(filter)
              }
              aria-pressed={active}
            >
              {filter}
            </button>
          )
        })}
      </nav>


      {/* =====================================================
          PUBLICATIONS
          ===================================================== */}

      {showPublications && (
        <>
          {filteredItems.length > 0 ? (
            <div
              className={
                `publications-grid ${
                  !isMobile &&
                  activeFilter === "All"
                    ? "is-compact"
                    : ""
                }`
              }
            >
              {filteredItems.map(
                (item, index) => {

                  const isOpen =
                    isMobile &&
                    openPublication ===
                      item.title

                  return (
                    <article
                      className={
                        `publication-card ${
                          isOpen
                            ? "is-open"
                            : ""
                        }`
                      }
                      key={
                        `${item.title}-${index}`
                      }
                      onClick={(event) =>
                        handlePublicationClick(
                          item,
                          event
                        )
                      }
                    >
                      <div className="publication-card-top">
                        <p className="publication-type">
                          {item.type}
                        </p>

                        <span className="publication-index">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
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
                          href={
                            item.file.href
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>
                            {
                              item.file
                                .label
                            }
                          </span>

                          <span aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      )}
                    </article>
                  )
                }
              )}
            </div>
          ) : (
            <div className="publications-empty">
              <p>
                New work in this
                category will be added
                as it is published.
              </p>
            </div>
          )}
        </>
      )}


      {/* =====================================================
          NOTE
          ===================================================== */}

      {note && (
        <footer className="publications-note">
          <p>{note}</p>
        </footer>
      )}
    </section>
  )
}