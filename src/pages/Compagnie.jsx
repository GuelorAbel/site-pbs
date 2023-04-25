import React from 'react'
import Hero from '../components/about/Hero'
import History from '../components/about/History'
import Values from '../components/about/Values'
import Engagment from '../components/about/Engagment'
import Testimonial from '../components/Testimonial'

export default function Compagnie() {
  return (
    <>
      {/* section image de garde */}
      <Hero />
      {/* section histoire de Pro Business Services */}
      <History />
      {/* les valeurs de PBS */}
      <Values />
      {/* l'engagement de PBS */}
      <Engagment />
      {/* témoignages */}
      <Testimonial />
    </>
  )
}
