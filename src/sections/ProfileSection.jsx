import "./ProfileSection.css"

export function ProfileSection({ content }) {
  const {
    bio,
    education,
    boards,
    profile,
  } = content

  return (
    <section
      className="profile-section"
      id="perfil"
      aria-labelledby="profile-title"
    >
      <div className="profile-main">
        

        <h2
          className="profile-title"
          id="profile-title"
        >
          {bio.headline}
        </h2>

        <div className="profile-biography">
          {bio.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "profile-intro"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="profile-areas"
          aria-label={profile.areasLabel}
        >
          {profile.areas.map((area) => (
            <a
              className="profile-area-tag"
              href={area.href}
              key={area.label}
            >
              <span>{area.label}</span>

              <span
                className="profile-area-arrow"
                aria-hidden="true"
              >
                ↘
              </span>
            </a>
          ))}
        </div>
      </div>

      <aside className="profile-sidebar">
        <div className="profile-meta-block">
          <p className="profile-meta-title">
            {profile.educationLabel}
          </p>

          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-item"
                key={`${item.credential}-${item.institution}`}
              >
                <p>
                  {item.credential}

                  {item.year && (
                    <span>
                      {" · "}
                      {item.year}
                    </span>
                  )}
                </p>

                <span>
                  {item.institution}
                </span>
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
                  {item.organization}
                  {" — "}
                  {item.role}
                </p>

                <span>
                  {item.fullName}
                </span>
              </article>
            ))}
          </div>
        </div>

        <a
          className="profile-press-kit"
          href={profile.pressKit.href}
          download={profile.pressKit.download}
        >
          <span aria-hidden="true">
            ↓
          </span>

          {profile.pressKit.label}
        </a>
      </aside>
    </section>
  )
}