export function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="footer-heading">
        <p className="footer-eyebrow">Contacto</p>
        <h2>Hablemos de ciudad.</h2>
      </div>

      <div className="footer-layout">
        <form className="footer-form">
          <div className="footer-form__row">
            <label>
              <span>Nombre</span>
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
              />
            </label>

            <label>
              <span>Organización</span>
              <input
                type="text"
                name="organization"
                placeholder="Medio, institución u organización"
              />
            </label>
          </div>

          <label>
            <span>Motivo</span>
            <select name="purpose" defaultValue="media">
              <option value="media">Solicitud de prensa</option>
              <option value="interview">Solicitud de entrevista</option>
              <option value="event">Invitación a evento</option>
              <option value="professional">Contacto profesional</option>
            </select>
          </label>

          <label>
            <span>Mensaje</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Cuéntanos brevemente el motivo del contacto"
            />
          </label>

          <button type="submit" className="footer-submit">
            Enviar mensaje
            <span aria-hidden="true">↗</span>
          </button>
        </form>

        <aside className="footer-information">
          <div className="footer-info-block">
            <p className="footer-info-title">
              Prensa y comunicaciones
            </p>

            <p className="footer-info-copy">
              Para solicitudes de prensa, entrevistas y
              coordinación de comunicaciones.
            </p>
          </div>

          <div className="footer-info-block">
            <p className="footer-info-title">Profesional</p>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="footer-info-block">
            <p className="footer-info-title">Institucional</p>

            <a
              href="https://www.habitatbogota.gov.co/"
              target="_blank"
              rel="noreferrer"
            >
              habitatbogota.gov.co
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </div>

      <div className="footer-bottom">
        <p>Vanessa Velasco · Bogotá, Colombia</p>

        <a href="#main-content">
          Volver al inicio
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}