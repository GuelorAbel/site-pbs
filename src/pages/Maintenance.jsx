import Hero from "../components/maintenances/Hero"
import Description from '../components/nettoyage/Description'
import Parteners from '../components/Parteners'
import ImgServices from '../components/ImgServices'


export default function Maintenance() {
  return (
    <>
      {/* couverture */}
      <Hero/>
      {/* détail du service */}
      <Description />
      {/* images relatives aux travaux  */}
      <ImgServices/>
      {/* les clients */}
      <Parteners />

    </>
  )
}
