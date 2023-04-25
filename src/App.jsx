// REACT ROUTER DOM
import {Routes, Route} from 'react-router-dom'
// TOUTES LES PAGES DU SITE PBS
import Accueil from './pages/Accueil'
import Compagnie from './pages/Compagnie'
import NettoyageDepollution from './pages/NettoyageDepollution'
import Maintenance from './pages/Maintenance'
import LogistiqueTransport from './pages/LogistiqueTransport'
import LocationEngins from './pages/LocationEngins'
import Actualites from './pages/Actualites'
import Contact from './pages/Contact'
// LES COMPOSANTS UTILES DU SITE
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import { RiWhatsappFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <>
      {/* La bar qui se trouve tout en haut */}
      <TopBar />
      {/* L'entête du site */}
      <Header />
      {/* Main représente le contenu de chaque page */}
      <main>
        <Link to="/" className="fixed top-[78%] left-[80%] md:left-[90%] text-vert z-10 animate-bounce"
        title="Cliquez pour discuter avec un agent PBS">
            <RiWhatsappFill size={60} />
        </Link>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/a-propos" element={<Compagnie/>} />
          <Route path="/nettoyage" element={<NettoyageDepollution/>} />
          <Route path="/maintenances" element={<Maintenance/>} />
          <Route path="/logistique" element={<LogistiqueTransport/>} />
          <Route path="/location" element={<LocationEngins/>} />
          <Route path="/blog" element={<Actualites/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      {/* Le pied de page */}
      <Footer/>
    </>
  )
}

