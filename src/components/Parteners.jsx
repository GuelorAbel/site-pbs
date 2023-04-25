import React from 'react'
import Container from './element/Container'
import SubTitle from './element/SubTitle'
import Marquee from 'react-fast-marquee'
// les logos des clients
import Sogara from '../assets/SOGARA.jpg'
import Shell from '../assets/SHELL-GABON.jpg'
import Assala from '../assets/ASSALA-ENERGY.jpg'
import Oilibya from '../assets/OILIBYA.jpg'
import OlaEnergy from '../assets/OLA-ENERGY.jpg'
import Sobraga from '../assets/SOBRAGA.jpg'
import Necotrans from '../assets/NECOTRANS.jpg'

export default function Parteners() {
  return (
    <section className="my-24">
        <Container>
            {/* le titre de ma section */}
            <SubTitle variant="h2" className="text-center mb-6 md:mb-3" > Nos clients </SubTitle>

            <Marquee className="my-16" speed={40} pauseOnHover={true}>
                {/* bloc du 1er client */}
                <div className="mx-4">
                    <img src={Sogara} alt="Le logo de la SOGARA"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>

                {/* bloc du 2ème client */}
                <div className="mx-4">
                    <img src={Shell} alt="Le logo de la SHELL-GABON"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>

                {/* bloc du 3ème client */}
                <div className="mx-4">
                    <img src={Assala} alt="Le logo de la ASSALA-ENERGY"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>

                {/* bloc du 4ème client */}
                <div className="mx-4">
                    <img src={Oilibya} alt="Le logo de la OILIBYA"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>

                {/* bloc du 5ème client */}
                <div className="mx-4">
                    <img src={OlaEnergy} alt="Le logo de la OLA-Energy"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>

                {/* bloc du 6ème client */}
                <div className="mx-4">
                    <img src={Sobraga} alt="Le logo de la Sobraga"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>

                {/* bloc du 7ème client */}
                <div className="mx-4">
                    <img src={Necotrans} alt="Le logo de la Necotrans"  className="w-40 md:w-48 object-cover rounded-full p-3"/>
                </div>
            </Marquee>
        </Container>
    </section>
  )
}
