
// Import des composants de la page
import AboutHome from "../components/home/AboutHome"
import Description from "../components/home/Description"
import HeroSlide from "../components/home/HeroSlide"
import Parteners from "../components/Parteners"
import Services from "../components/home/Services"
import Testimonial from "../components/Testimonial"



export default function Accueil() {
  // état
  // comportement
  // affichage
  return (
    <>
      {/* Slide de présentation */}
      <HeroSlide />
      {/* Section regard sur PBS */}
      <AboutHome />
      {/* Petite présentation de PBS */}
      <Description />
      {/* Les services de PBS */}
      <Services />
      {/* Les clients de PBS */}
      <Parteners />
      {/* Les témoignages des clients */}
      <Testimonial />
    </>
  )
}
