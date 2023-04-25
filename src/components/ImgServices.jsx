import React from 'react'
import Container from './element/Container'
import ImgService from '../assets/images/service.jpg'

export default function ImgServices() {
  return (
    <section className="my-20 px-4">
        <Container>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="bg-gris mx-auto" title="Espace réservé aux images illustrant le service">
                  <img src={ImgService} alt="" className="w-full h-full object-cover object-center" />
                </div>
            </div>
        </Container>
    </section>
  )
}
