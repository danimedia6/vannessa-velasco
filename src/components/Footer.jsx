import { useState } from "react"
import "./Footer.css"

function SocialIcon({ network }) {
  if (network === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M7 10v7" />
        <path d="M7 7.5v.1" />
        <path d="M11 17v-4c0-1.7 1-3 2.7-3 1.6 0 2.3 1.1 2.3 3v4" />
        <path d="M11 10v7" />
      </svg>
    )
  }

  if (network === "X") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M5 4l14 16" />
        <path d="M19 4L5 20" />
      </svg>
    )
  }

  if (network === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.3"
          cy="6.7"
          r="0.8"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    )
  }

  if (network === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" />
      </svg>
    )
  }

  if (network === "YouTube") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="m10 9 5 3-5 3Z" />
      </svg>
    )
  }

  return null
}

function FormField({ field }) {
  if (field.type === "select") {
    return (
      <label>
        <span>{field.label}</span>

        <select
          name={field.name}
          defaultValue={
            field.options?.[0]?.value ??
            field.options?.[0] ??
            ""
          }
        >
          {field.options?.map((option) => {
            const value =
              typeof option === "string"
                ? option
                : option.value

            const label =
              typeof option === "string"
                ? option
                : option.label

            return (
              <option
                value={value}
                key={value}
              >
                {label}
              </option>
            )
          })}
        </select>
      </label>
    )
  }

  if (field.type === "textarea") {
    return (
      <label>
        <span>{field.label}</span>

        <textarea
          name={field.name}
          rows="4"
          placeholder={field.placeholder}
        />
      </label>
    )
  }

  return (
    <label>
      <span>{field.label}</span>

      <input
        type={field.type || "text"}
        name={field.name}
        placeholder={field.placeholder}
      />
    </label>
  )
}

export function Footer({ content }) {

  const [formStatus, setFormStatus] = useState("idle")
  const { contact } = content

  const fields = contact.form?.fields || []

  const firstRowFields = fields.slice(0, 2)
  const remainingFields = fields.slice(2)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = Object.fromEntries(formData.entries())

    try {
      setFormStatus("sending")

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Error sending form")
      }

      form.reset()

      setFormStatus("success")
    } catch (error) {
      console.error(error)

      setFormStatus("error")
    }
  }

  const personalSocials =
    contact.socials?.items?.filter(
      (social) => social.href
    ) || []

  const institutionalSocials =
    contact.institutional?.socials?.filter(
      (social) => social.href
    ) || []

  return (
    <footer
      className="site-footer"
      id="contacto"
    >
      {/* =====================================================
          HEADING
          ===================================================== */}

      <div className="footer-heading">
        <p className="footer-eyebrow">
          {contact.label}
        </p>

        <h2>
          {contact.headline}
        </h2>
      </div>


      {/* =====================================================
          MAIN
          ===================================================== */}

      <div className="footer-layout">

        {/* FORM */}

        <form
          className="footer-form"
          onSubmit={handleSubmit}
        >

          {firstRowFields.length > 0 && (
            <div className="footer-form__row">
              {firstRowFields.map((field) => (
                <FormField
                  field={field}
                  key={field.name}
                />
              ))}
            </div>
          )}

          {remainingFields.map((field) => (
            <FormField
              field={field}
              key={field.name}
            />
          ))}

          <button
            type="submit"
            className="footer-submit"
            disabled={formStatus === "sending"}
          >
            {formStatus === "sending"
              ? "Enviando..."
              : contact.form.submitLabel}

            <span aria-hidden="true">
              ↗
            </span>
          </button>

          {formStatus === "success" && (
            <p className="footer-form-status is-success">
              Mensaje enviado correctamente.
            </p>
          )}

          {formStatus === "error" && (
            <p className="footer-form-status is-error">
              No pudimos enviar el mensaje. Inténtalo nuevamente.
            </p>
          )}
        </form>


        {/* ===================================================
            RIGHT INFORMATION
            =================================================== */}

        <aside className="footer-information">

          {/* PRESS */}

          {contact.media && (
            <div className="footer-info-block">
              <p className="footer-info-title">
                {contact.media.label}
              </p>

              <p className="footer-info-copy">
                {contact.media.text}
              </p>
            </div>
          )}


          {/* PERSONAL SOCIALS */}

          {contact.socials && (
            <div className="footer-social-block">
              <p className="footer-info-title">
                {contact.socials.label}
              </p>

              <div className="footer-socials">
                {personalSocials.map((social) => (
                  <a
                    className="footer-social-link"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.network}
                    title={social.network}
                    key={social.network}
                  >
                    <SocialIcon
                      network={social.network}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}


          {/* =================================================
              INSTITUTIONAL
              ================================================= */}

          {contact.institutional && (
            <div className="footer-institutional">

              <div className="footer-institutional__identity">
                <p className="footer-info-title">
                  {contact.institutional.label}
                </p>

                <p className="footer-institutional__name">
                  {contact.institutional.name}
                </p>
              </div>


              {/* INSTITUTIONAL SOCIALS */}

              {institutionalSocials.length > 0 && (
                <div className="footer-institutional__socials">
                  {institutionalSocials.map((social) => (
                    <a
                      className="footer-social-link"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${social.network} · ${contact.institutional.name}`}
                      title={social.network}
                      key={social.network}
                    >
                      <SocialIcon
                        network={social.network}
                      />
                    </a>
                  ))}
                </div>
              )}


              {/* WEBSITE */}

              {contact.institutional.website && (
                <a
                  className="footer-institutional__website"
                  href={contact.institutional.website.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    {contact.institutional.website.label}
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}

            </div>
          )}

        </aside>
      </div>


      {/* =====================================================
          BOTTOM
          ===================================================== */}

      <div className="footer-bottom">

        <p className="footer-signature">
          {contact.bottom?.signature}
        </p>

        <a href="#main-content">
          {contact.bottom?.backToTop}

          <span aria-hidden="true">
            ↑
          </span>
        </a>

      </div>
    </footer>
  )
}