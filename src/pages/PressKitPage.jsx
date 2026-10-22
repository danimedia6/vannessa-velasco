import { pressKitContent } from '../data/pressKitContent'
import '../styles/press-kit.css'
import ArrowIcon from '../components/ArrowIcon'

export function PressKitPage() {
  const isSpanish =
    window.location.pathname === '/es/press-kit' ||
    window.location.pathname.startsWith('/es/press-kit/')

  const content =
    isSpanish
      ? pressKitContent.es
      : pressKitContent.en

  const file = content.bullets.file

  return (
    <div className="press-kit-page">

      <section className="press-kit-hero">
        <p className="press-kit-eyebrow">
          {content.eyebrow}
        </p>

        <h1>{content.title}</h1>

        <p className="press-kit-intro">
          {content.intro}
        </p>
      </section>


      <nav className="press-kit-index">
        {content.navigation.map((item) => (
            <a
            key={item.id}
            href={`#${item.id}`}
            >
            <span>{item.label}</span>

            <ArrowIcon
                direction="down-right"
                className="press-kit-index-arrow"
            />
            </a>
        ))}
        </nav>


      {/* BULLETS */}

      <section
        className="press-resource-section"
        id="bullets"
      >
        <header className="press-resource-heading">
          <p className="press-resource-number">
            {content.bullets.number} / {content.bullets.title}
          </p>

          <div>
            <h2>
              {content.bullets.title}
            </h2>

            <p>
              {content.bullets.description}
            </p>
          </div>
        </header>

        
        <div className="press-bullets">

            <p className="press-bullets-eyebrow">
                {content.bullets.eyebrow}
            </p>


            <article className="press-bullets-group">
                <h3>
                {content.bullets.managementPriorities.title}
                </h3>

                <ul>
                {content.bullets.managementPriorities.items.map((item) => (
                    <li key={item}>
                    {item}
                    </li>
                ))}
                </ul>
            </article>


            <article className="press-bullets-group">
                <h3>
                {content.bullets.keyFigures.title}
                </h3>

                <div className="press-bullets-figures">
                {content.bullets.keyFigures.items.map((item) => (
                    <div
                    className="press-bullets-figure"
                    key={item.value}
                    >
                    <strong>
                        {item.value}
                    </strong>

                    <p>
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>
            </article>


            <article className="press-bullets-group">
                <h3>
                {content.bullets.coreMessages.title}
                </h3>

                <ul>
                {content.bullets.coreMessages.items.map((item) => (
                    <li key={item}>
                    {item}
                    </li>
                ))}
                </ul>
            </article>


            <article className="press-bullets-group">
                <h3>
                {content.bullets.interviewTopics.title}
                </h3>

                <ul>
                {content.bullets.interviewTopics.items.map((item) => (
                    <li key={item}>
                    {item}
                    </li>
                ))}
                </ul>
            </article>

        </div>
      </section>

      {/* PRESS RELEASES */}

      <section
        className="press-resource-section"
        id={content.navigation[1].id}
        >
        <header className="press-resource-heading">
            <p className="press-resource-number">
            {content.pressReleases.sectionLabel}
            </p>

            <div>
            <h2>
                {content.pressReleases.title}
            </h2>

            <p>
                {content.pressReleases.description}
            </p>
            </div>
        </header>


        {content.pressReleases.articles ? (

        <div className="press-release-list">

            {content.pressReleases.articles.map(
            (article, index) => (

                <article
                className="press-release-article"
                id={article.id}
                key={article.id}
                >

                <span className="press-release-index">
                    {String(index + 1).padStart(2, '0')}
                </span>


                <div className="press-release-content">

                    <header className="press-release-article-header">

                    <p className="press-release-type">
                        Press release
                    </p>

                    <h3>
                        {article.title}
                    </h3>

                    </header>


                    {article.highlights?.length > 0 && (

                    <ul className="press-release-highlights">

                        {article.highlights.map(
                        (item) => (
                            <li key={item}>
                            {item}
                            </li>
                        )
                        )}

                    </ul>

                    )}


            <div className="press-release-body">

              {article.sections.map(
                (section, sectionIndex) => (

                  <section
                    className="press-release-block"
                    key={`${article.id}-${sectionIndex}`}
                  >

                    {section.title && (
                      <h4>
                        {section.title}
                      </h4>
                    )}


                    {section.paragraphs?.map(
                      (paragraph) => (
                        <p key={paragraph}>
                          {paragraph}
                        </p>
                      )
                    )}


                    {section.bullets?.length > 0 && (

                      <ul>
                        {section.bullets.map(
                          (item) => (
                            <li key={item}>
                              {item}
                            </li>
                          )
                        )}
                      </ul>

                    )}


                    {section.afterParagraphs?.map(
                      (paragraph) => (
                        <p key={paragraph}>
                          {paragraph}
                        </p>
                      )
                    )}

                  </section>

                )
              )}


              {article.quotes && (

                <section className="press-release-quotes">

                  <h4>
                    {article.quotes.title}
                  </h4>

                  {article.quotes.items.map(
                    (quote) => (
                      <blockquote key={quote}>
                        <p>
                          “{quote}”
                        </p>
                      </blockquote>
                    )
                  )}

                </section>

              )}
            </div>

          </div>

        </article>

      )
    )}

  </div>

            ) : (

            /* TEMPORARY: SPANISH STILL USES PDF LIST */

            <div className="press-file-list">

                {content.pressReleases.files.map(
                (file, index) => (

                    <article
                    className="press-file-row"
                    key={file.filename}
                    >

                    <span className="press-file-index">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="press-file-main">
                        <p>{file.type}</p>
                        <h3>{file.title}</h3>
                    </div>

                    

                    </article>

                )
                )}

            </div>

            )
        }
        </section>

      {/* REVITALIZATION PHOTOS */}

        <section
        className="press-resource-section"
        id={content.navigation[2].id}
        >
        <header className="press-resource-heading">
            <p className="press-resource-number">
            {content.revitalizationPhotos.sectionLabel}
            </p>

            <div>
            <h2>
                {content.revitalizationPhotos.title}
            </h2>

            <p>
                {content.revitalizationPhotos.description}
            </p>
            </div>
        </header>


        <div className="press-photo-grid">
            {content.revitalizationPhotos.files.map(
            (photo) => (
                <article
                className="press-photo-card"
                key={photo.filename}
                >
                <a
                    className="press-photo-image"
                    href={photo.preview}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                    src={photo.preview}
                    alt={photo.title}
                    loading="lazy"
                    />
                </a>

                <div className="press-photo-meta">
                    <div>
                    <p>JPG</p>
                    <h3>{photo.title}</h3>
                    </div>

                    <div className="press-photo-actions">
                    <a
                        href={photo.preview}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {content.actions.view} <ArrowIcon direction="up-right" />
                    </a>

                    <a
                        href={photo.original}
                        download={photo.filename}
                    >
                        {content.actions.download} <ArrowIcon direction="down" />
                    </a>
                    </div>
                </div>
                </article>
            )
            )}
        </div>
        </section>

      {/* VANESSA VELASCO PHOTOS */}

        <section
        className="press-resource-section"
        id={content.navigation[3].id}
        >
        <header className="press-resource-heading">
            <p className="press-resource-number">
            {content.vanessaPhotos.sectionLabel}
            </p>

            <div>
            <h2>
                {content.vanessaPhotos.title}
            </h2>

            <p>
                {content.vanessaPhotos.description}
            </p>
            </div>
        </header>


        <div className="press-photo-grid">
            {content.vanessaPhotos.files.map(
            (photo) => (
                <article
                className="press-photo-card"
                key={photo.filename}
                >
                <a
                    className="press-photo-image"
                    href={photo.preview}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                    src={photo.preview}
                    alt={photo.title}
                    loading="lazy"
                    />
                </a>

                <div className="press-photo-meta">

                    <div>
                    <p>JPG</p>
                    <h3>{photo.title}</h3>
                    </div>

                    <div className="press-photo-actions">
                    <a
                        href={photo.preview}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {content.actions.view} <ArrowIcon direction="up-right" />
                    </a>

                    <a href={photo.original}>
                        {content.actions.download} <ArrowIcon direction="down" />
                    </a>
                    </div>

                </div>
                </article>
            )
            )}
        </div>
        </section>

      {/* HOUSING PHOTOS */}

        <section
        className="press-resource-section"
        id={content.navigation[4].id}
        >
        <header className="press-resource-heading">
            <p className="press-resource-number">
            {content.housingPhotos.sectionLabel}
            </p>

            <div>
            <h2>
                {content.housingPhotos.title}
            </h2>

            <p>
                {content.housingPhotos.description}
            </p>
            </div>
        </header>

        <div className="press-photo-grid">
            {content.housingPhotos.files.map(
            (photo) => (
                <article
                className="press-photo-card"
                key={photo.filename}
                >
                <a
                    className="press-photo-image"
                    href={photo.preview}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                    src={photo.preview}
                    alt={photo.title}
                    loading="lazy"
                    />
                </a>

                <div className="press-photo-meta">
                    <div>
                    <p>JPG</p>
                    <h3>{photo.title}</h3>
                    </div>

                    <div className="press-photo-actions">
                    <a
                        href={photo.preview}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {content.actions.view} <ArrowIcon direction="up-right" />
                    </a>

                    <a href={photo.original}>
                        {content.actions.download} <ArrowIcon direction="down" />
                    </a>
                    </div>
                </div>
                </article>
            )
            )}
        </div>
        </section>

      {/* VIDEOS */}

        <section
        className="press-resource-section"
        id={content.navigation[5].id}
        >
        <header className="press-resource-heading">
            <p className="press-resource-number">
            {content.videos.sectionLabel}
            </p>

            <div>
            <h2>{content.videos.title}</h2>

            <p>
                {content.videos.description}
            </p>
            </div>
        </header>

        <div className="press-video-grid">
            {content.videos.files.map((video) => (
            <article
                className="press-video-card"
                key={video.filename}
            >
                <div className="press-video-preview">
                <video
                    controls
                    preload="metadata"
                    playsInline
                >
                    <source
                    src={video.url}
                    type="video/mp4"
                    />

                    Your browser does not support video playback.
                </video>
                </div>

                <div className="press-video-meta">
                <div>
                    <p>
                    {video.type}
                    {' · '}
                    {video.duration}
                    {' · '}
                    {video.size}
                    </p>

                    <h3>{video.title}</h3>
                </div>

                <div className="press-video-actions">
                    <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <>
                    {isSpanish ? 'Ver video' : 'View video'}{' '}
                    <ArrowIcon direction="up-right" />
                    </>
                    </a>

                    <a href={video.download}>
                    <>
                    {isSpanish
                        ? 'Descargar original'
                        : 'Download original'}{' '}
                    <ArrowIcon direction="down" />
                    </>
                    </a>
                </div>
                </div>
            </article>
            ))}
        </div>
        </section>

    </div>
  )
}