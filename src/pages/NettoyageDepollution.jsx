import React from 'react'
import Hero from '../components/nettoyage/Hero'
import Description from '../components/nettoyage/Description'
import Parteners from '../components/Parteners'
import ImgServices from '../components/ImgServices'

export default function NettoyageDepollution() {
  return (
    <>
      {/* Image de couverture */}
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
