import React from 'react'
import Container from '../element/Container'
import SubTitle from '../element/SubTitle'
// les images
import Certification from '../../assets/04.png'
import Objectif from '../../assets/03.png'
import Ecoute from '../../assets/02.png'
import Progres from '../../assets/01.png'

export default function Engagment() {
  return (
    <section className="my-20">
        <Container>
            <SubTitle variant="h2" className="text-center"> notre engagement</SubTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9 mb-6">
                {/* certification */}
                <div className="py-2">
                    <img src={Certification} alt="Photo d'un certificat qui symbolise la démarche de PBS"
                    className="w-64 mx-auto"
                    />
                </div>
                {/* objectif */}
                <div className="py-2">
                    <img src={Objectif} alt="Photo d'un certificat qui symbolise la démarche de PBS"
                    className="w-64 mx-auto"
                    />
                </div>
                {/* ecoute */}
                <div className="py-2">
                    <img src={Ecoute} alt="Photo d'un certificat qui symbolise la démarche de PBS"
                    className="w-64 mx-auto"
                    />
                </div>
                {/* axe de progres */}
                <div className="py-2">
                    <img src={Progres} alt="Photo d'un certificat qui symbolise la démarche de PBS"
                    className="w-64 mx-auto"
                    />
                </div>
            </div>
        </Container>
    </section>
  )
}
