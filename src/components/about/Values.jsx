import React from 'react'
import Container from '../element/Container'
import SubTitle from '../element/SubTitle'
import Paragraph from '../element/Paragraph'
import { BsCheck2Circle } from 'react-icons/bs'

export default function Values() {
  return (
    <section className="my-20 py-9 px-4 bg-gris">
        <Container>
            <SubTitle variant="h2" className="text-center">nos valeurs</SubTitle>
            <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <div className="flex space-x-3 items-center">
                      <BsCheck2Circle size={50} className="text-vert"/>
                      <SubTitle variant="h5" className="font-bold">
                        <span className=" text-bleu">Être  l'écoute de notre clientèle</span>
                      </SubTitle>
                  </div>
                  <Paragraph>
                    Par son professionnalisme, Pro Business Services est réactive, disponible et à l'écoute
                    de ses clients. Elle offre à ses clients un personnel compétent et expérimenté.
                  </Paragraph>
                </div>

                <div>
                  <div className="flex space-x-3 items-center">
                    <BsCheck2Circle size={50} className="text-vert"/>
                    <SubTitle variant="h5" className="font-bold">
                      <span className=" text-bleu">collaboration </span>
                      </SubTitle>
                  </div>
                  <Paragraph>
                    Pro Business Services est à l'écoute des besoins du client afin
                    d'apporter des réponses adaptées et innovantes.
                  </Paragraph>
                </div>

                <div>
                  <div className="flex space-x-3 items-center">
                    <BsCheck2Circle size={50} className="text-vert"/>
                    <SubTitle variant="h5" className="font-bold">
                      <span className=" text-bleu">respect de l'environnement</span>
                    </SubTitle>
                  </div>
                  <Paragraph>
                    Pro Business Services s'engage à respecter les normes environnementales
                    en vigueur dans les différents secteurs où il opère.  
                  </Paragraph>
                </div>

                <div>
                  <div className="flex space-x-3 items-center">
                    <BsCheck2Circle size={50} className="text-vert"/>
                    <SubTitle variant="h5" className="font-bold">
                      <span className=" text-bleu">qualité</span>
                    </SubTitle>
                  </div>
                  <Paragraph>
                    Par son professionnalisme, Pro Business Services est réactive, disponible et à l'écoute
                    de ses clients. Elle offre à ses clients un personnel compétent et expérimenté.
                  </Paragraph>
                </div>

                <div>
                  <div className="flex space-x-3 items-center">
                    <BsCheck2Circle size={50} className="text-vert"/>
                    <SubTitle variant="h5" className="font-bold">
                      <span className=" text-bleu">responsabilités</span>
                    </SubTitle>
                  </div>
                  <Paragraph>
                    Pro Business Services a pour mission de soutenir les associations et
                    organismes à but non lucratif dans leurs activités. Elle fait de cette
                    politique une priorité dans la déclinaison de ses actions sociétales.
                  </Paragraph>
                </div>
            </div>
        </Container>
    </section>
  )
}
