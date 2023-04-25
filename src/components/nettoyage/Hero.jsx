import {useEffect} from 'react'
import Container from '../element/Container'
import Titre from '../element/Titre'
// Aos animation
import Aos from 'aos'

export default function Hero() {
    // données dynamiques

    // comportements
        // initialisation des animation
        useEffect(() => {
        Aos.init({
            duration: 800
        });
        }, []);

    // rendu navigateur
  return (
    <section id="coverNettoyage">
            <div className="absolute top-0 left-0 bg-noir bg-opacity-20 w-full h-full px-6"></div>
            <Container>
                <div className="w-[80%] lg:w-1/2 bg-blanc/60 backdrop-blur-md px-3 py-2 shadow-lg 
                rounded-lg absolute bottom-[30%] right-3 lg:right-10"
                    data-aos="fade-down" data-aos-delay="1000"
                >
                    <div className="py-3">
                        <Titre >NETTOYAGE INDUSTRIEL & <br/> DEPOLLUTION</Titre>
                    </div>
                </div>
            </Container>
        
    </section>
  )
}
