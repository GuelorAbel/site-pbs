import React from 'react'
import Hero from '../components/contact/Hero'
import ContactUs from '../components/contact/ContactUs'
import MapPBS from '../components/contact/MapPBS'
import Testimonial from '../components/Testimonial'

export default function Contact() {
  return (
    <>
      {/* couverture page cotact */}
      <Hero />
      {/* les coordonnées */}
      <ContactUs />
      {/* la géolocalisation de PBS */}
      <MapPBS/>
      {/* les témoignages */}
      <Testimonial />
    </>
  )
}
