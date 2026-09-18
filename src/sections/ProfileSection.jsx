export function ProfileSection({ content }) {
  const { bio, education, boards } = content

  return (
    <section className="profile-section" aria-labelledby="profile-title">
      <div className="profile-main">
        <p className="profile-eyebrow">{bio.label}</p>

        <h2 className="profile-title" id="profile-title">
          Urban
          <br />
          <em>leader.</em>
        </h2>

        <div className="profile-biography">
          {bio.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? 'profile-intro' : ''}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="profile-areas" aria-label="Áreas de trabajo">
          {content.profile.areas.map((area) => (
            <span className="profile-area-tag" key={area}>
              {area}
            </span>
          ))}
        </div>
      </div>

      <aside className="profile-sidebar">
        <div className="profile-meta-block">
          <p className="profile-meta-title">Education</p>

          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-item"
                key={`${item.credential}-${item.institution}`}
              >
                <p>
                  {item.credential}
                  {item.year && <span> · {item.year}</span>}
                </p>

                <span>{item.institution}</span>
              </article>
            ))}
          </div>
        </div>

       

        <div className="profile-meta-block profile-boards">
          <p className="profile-meta-title">
            {boards.label}
          </p>

          <div className="boards-list">
            {boards.items.map((item) => (
              <article
                className="board-item"
                key={item.organization}
              >
                <p>
                  {item.organization} — {item.role}
                </p>

                <span>{item.fullName}</span>
              </article>
            ))}
          </div>
        </div>
         <a
          className="profile-press-kit"
          href="#"
        >
          <span aria-hidden="true">↓</span>
          Download press kit
        </a>
      </aside>
    </section>
  )
}