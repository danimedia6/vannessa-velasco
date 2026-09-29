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
import { useLocalitiesScroll } from './hooks/useLocalitiesScroll.js'

export default function App() {
  //useScrollTraceProgress()
  useAlternateBackgroundScroll()
  useLocalitiesScroll()

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
            src="/images/1.png"
            alt=""
            data-scroll-start="0.03"
            data-scroll-end="0.18"
          />

          <img
            className="locality-image locality-image--2"
            src="/images/2.png"
            alt=""
            data-scroll-start="0.16"
            data-scroll-end="0.28"
          />
          <img
            className="locality-image locality-image--3"
            src="/images/3.png"
            alt=""
            data-scroll-start="0.22"
            data-scroll-end="0.38"
          />
          <img
            className="locality-image locality-image--4"
            src="/images/4.png"
            alt=""
            data-scroll-start="0.30"
            data-scroll-end="0.48"
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
