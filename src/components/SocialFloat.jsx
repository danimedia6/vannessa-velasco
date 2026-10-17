import "./SocialFloat.css"

export function SocialFloat({ socials }) {
  const items = Array.isArray(socials)
    ? socials
    : socials?.items ?? []

  const label = Array.isArray(socials)
    ? "Social networks"
    : socials?.label ?? "Social networks"

  const icons = {
    LinkedIn: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM21 13.65c0-3.86-2.06-5.65-4.8-5.65a4.15 4.15 0 0 0-3.75 2.06V8.2H9.2V21h3.3v-6.34c0-1.67.32-3.29 2.4-3.29 2.05 0 2.08 1.92 2.08 3.4V21H21v-7.35Z"
        />
      </svg>
    ),

    X: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 3H22l-6.77 7.74L23.2 21h-6.24l-4.89-6.39L6.48 21H3.36l7.26-8.3L2.98 3h6.4l4.42 5.84L18.9 3Zm-1.1 16.2h1.72L8.44 4.7H6.6L17.8 19.2Z"
        />
      </svg>
    ),

    Instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 1.8a3.4 3.4 0 0 0-3.4 3.4v9.6a3.4 3.4 0 0 0 3.4 3.4h9.6a3.4 3.4 0 0 0 3.4-3.4V7.2a3.4 3.4 0 0 0-3.4-3.4H7.2Zm10.25 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.15 5.15 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z"
        />
      </svg>
    ),
  }

  if (!items.length) {
    return null
  }

  return (
    <aside
      className="social-float"
      aria-label={label}
    >
      {items.map((social) => (
        <a
          key={social.network}
          className="social-float__link"
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.network}
          title={social.network}
        >
          {icons[social.network]}
        </a>
      ))}
    </aside>
  )
}

export default SocialFloat