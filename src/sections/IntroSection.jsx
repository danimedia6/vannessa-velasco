export function IntroSection({ content }) {
  return (
    <section className="intro-section" aria-labelledby="intro-title">
      <p className="intro-eyebrow">{content.eyebrow}</p>
      <h1 id="intro-title">{content.title}</h1>
      <p>{content.description}</p>
    </section>
  )
}
