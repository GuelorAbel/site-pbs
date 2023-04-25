import { useEffect } from "react"
// Aos animation
import Aos from 'aos'
import ImagePBS from '../../assets/images/presentation.jpg'
// composants globaux
import Container from '../element/Container'
import Bouton from '../element/Bouton'
import Paragraph from '../element/Paragraph'
import SubTitle from '../element/SubTitle'
import { Link } from "react-router-dom"

export default function Description() {
    // initialisation des animation
  useEffect(() => {
    Aos.init({
      duration: 900
    });
  }, []);

// rendu navigateur
  return (
    <section className="my-10 px-4">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-6 py-6">
                {/* image  */}
                <div className="bg-vert rounded-2xl" data-aos="fade-down" data-aos-delay="700">

                    <img src={ImagePBS} alt="Les agents de Pro Business Services qui fixe un tableau à l'entrée de SPIE OIL Gabon" 
                    className="w-full h-full rounded-2xl object-cover object-center" />

                </div>

                {/* le contenu */}
                <div className="my-auto" data-aos="fade-up" data-aos-delay="800">
                    <SubTitle variant="h2" className="mb-3">
                        à propos de Pro Business Services
                    </SubTitle>
                    {/* la présentation de PBS */}
                    <Paragraph className="w-full md:w-[98%] mb-3">
                        Basé à Port-Gentil, <span className="font-bold">PRO BUSINESS SERVICES (PBS) </span> 
                        est  une entreprise gabonaise opérant dans les domaines du nettoyage industriel, la 
                        dépollution, la maintenance Onshore & Offshore, le transport logistique et la location 
                        des engins...
                    </Paragraph>
                    {/* le bouton vers a propos */}
                    <Bouton>
                        <Link to="/a-propos" className="text-lg md:text-xl">en savoir plus</Link>
                    </Bouton>
                </div>
            </div>
        </Container>
    </section>
  )
}
