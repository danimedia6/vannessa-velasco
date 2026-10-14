import {
  useEffect,
  useRef,
  useState,
} from "react"

import "./SocialFloat.css"

const socials = [
  {
    label: "LinkedIn",
    href:
      "https://www.linkedin.com/in/vanessa-alexandra-velasco-bernal-4614b55b/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M6.5 8.5V18M6.5 5.5v.01M10.5 18v-5.2c0-2.1 1.2-3.3 3-3.3s3 1.2 3 3.3V18M10.5 10v8M16.5 18v-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    label: "X",
    href:
      "https://x.com/vvbernal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M6 5l12 14M18 5L6 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    label: "Instagram",
    href:
      "https://www.instagram.com/welascobernal/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <circle
          cx="16.7"
          cy="7.5"
          r=".9"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export function SocialFloat() {
  const [isOpen, setIsOpen] =
    useState(false)

  const dockRef =
    useRef(null)

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        dockRef.current &&
        !dockRef.current.contains(
          event.target
        )
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener(
      "pointerdown",
      handleClickOutside
    )

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleClickOutside
      )
    }
  }, [])

  return (
    <div
      className={`social-float ${
        isOpen ? "is-open" : ""
      }`}
      ref={dockRef}
    >
      <div className="social-float__links">
        {socials.map((social) => (
          <a
            key={social.label}
            className="social-float__link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            <span className="social-float__label">
              {social.label}
            </span>

            <span className="social-float__icon">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      <button
        className="social-float__trigger"
        type="button"
        aria-label={
          isOpen
            ? "Close social links"
            : "Open social links"
        }
        aria-expanded={isOpen}
        onClick={() =>
          setIsOpen(
            (current) => !current
          )
        }
      >
        <span />
        <span />
      </button>
    </div>
  )
}