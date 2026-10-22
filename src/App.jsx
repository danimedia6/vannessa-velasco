import { Header } from './components/Header.jsx'
import { pageContent } from "./data/siteContent"
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
import {
  SocialFloat,
} from "./components/SocialFloat"
import { PressKitPage } from './pages/PressKitPage.jsx'

export default function App() {
  //useScrollTraceProgress()
  useAlternateBackgroundScroll()
  useLocalitiesScroll()

  const isPressKit =
  window.location.pathname === '/press-kit' ||
  window.location.pathname.startsWith('/press-kit/') ||
  window.location.pathname === '/es/press-kit' ||
  window.location.pathname.startsWith('/es/press-kit/')

  return (
    <div className="app-shell">
      {/* <BogotaMapBackground /> */}

      <div className="alternate-background" aria-hidden="true">
        <img
          className="alternate-map-base"
          src="/images/fondo1.png"
          alt=""
        />

        
      </div>
      
      
      <Header content={pageContent} />
      <main id="main-content">
        {isPressKit ? (
          <PressKitPage />
        ) : (
          <>
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

            <SocialFloat socials={pageContent.contact.socials} />
          </>
        )}
      </main>
      <Footer content={pageContent} />
      
    </div>
  )
}
