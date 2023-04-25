import React from 'react'
import Hero from '../components/locaengins/Hero'
import Description from '../components/nettoyage/Description'
import Parteners from '../components/Parteners'
import ImgServices from '../components/ImgServices'

export default function LocationEngins() {
  return (
    <>
      {/* couverture de la page */}
      <Hero />
      {/* détail du service */}
      <Description />
      {/* images relatives aux travaux  */}
      <ImgServices/>
      {/* les clients */}
      <Parteners />
    </>
  )
}
