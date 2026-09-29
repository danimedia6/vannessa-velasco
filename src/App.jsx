import { Header } from './components/Header.jsx'
import { BogotaMapBackground } from './components/BogotaMapBackground.jsx'
import { useScrollTraceProgress } from './hooks/useScrollTraceProgress.js'
import { pageContent } from './data/pageContent.js'
import { Hero } from './sections/Hero.jsx'
import { ProfileSection } from './sections/ProfileSection.jsx'
import { ImpactSection } from './sections/ImpactSection.jsx'
import { VideoInterlude } from './sections/VideoInterlude.jsx'
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection.jsx'
import { Footer } from './components/Footer.jsx'
import { ExperienceTimeline } from './sections/ExperienceTimeline.jsx'
import { WorldBankBounce } from "./components/WorldBankBounce";
import { PublicationsSection } from "./sections/PublicationsSection.jsx"
import { InternationalAgenda } from "./sections/InternationalAgenda.jsx"
import { PressSection } from "./sections/PressSection.jsx"
import './sections/fondo.css'
import { useAlternateBackgroundScroll } from './hooks/useAlternateBackgroundScroll.js'

export default function App() {
  //useScrollTraceProgress()
  useAlternateBackgroundScroll()

  return (
    <div className="app-shell">
      {/* <BogotaMapBackground /> */}

      <div className="alternate-background" aria-hidden="true">
        <img
          className="alternate-map-base"
          src="/images/fondo1.png"
          alt=""
        />

        <div className="localities-layer">
          <img
            className="locality-image locality-image--1"
            src="/images/3.png?v=3"
            alt=""
          />
        </div>
      </div>
      
      
      <Header content={pageContent} />
      <main id="main-content">
        <Hero content={pageContent} />
        <div id="next" className="hero-end-marker" aria-hidden="true" />

        <ImpactSection content={pageContent} />

        <section id="perfil">
          <VideoInterlude content={pageContent} />
          <ProfileSection content={pageContent} />
        </section>

        <ExperienceTimeline content={pageContent} />

        <FeaturedProjectsSection content={pageContent} />

        <WorldBankBounce
          content={pageContent.experience.worldBank}
        />

        <PublicationsSection content={pageContent} />

        <InternationalAgenda content={pageContent} />

        <PressSection content={pageContent} />
      </main>
      <Footer content={pageContent} />
    </div>
  )
}
