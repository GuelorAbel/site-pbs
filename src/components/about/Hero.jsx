import React from 'react'
import Container from '../element/Container'
import Paragraph from '../element/Paragraph'
import SubTitle from '../element/SubTitle'
import { useEffect } from "react"
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
    <section id="coverAbout">
        <div className="absolute top-0 left-0 bg-noir bg-opacity-20 w-full h-full px-6"></div>
            <Container>
                <div className="w-[95%] lg:w-1/2 bg-blanc/60 backdrop-blur-md px-3 py-2 shadow-lg 
                rounded-lg absolute bottom-[20%] md:bottom-[30%] right-3 lg:right-10"
                    data-aos="fade-down" data-aos-delay="1000"
                >
                    <div className="">
                        <SubTitle variant="h2">A PROPOS DE PROBUSINESS</SubTitle>
                        <Paragraph className="" >
                            Pro Business Services est capable de répondre vos besoins avec réactivité
                            et efficacité sur l’ensemble du territoire grâce à son réseau de partenaires
                            et sous-traitants.
                        </Paragraph>
                    </div>
                </div>
            </Container>
        
    </section>
  )
}
