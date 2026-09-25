import { Header } from './components/Header.jsx'
import { BogotaMapBackground } from './components/BogotaMapBackground.jsx'
import { CityTrace } from './components/CityTrace.jsx'
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

export default function App() {
  useScrollTraceProgress()

  return (
    <div className="app-shell">
      <BogotaMapBackground />
      <CityTrace />
      
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
      </main>
      <Footer />
    </div>
  )
}
