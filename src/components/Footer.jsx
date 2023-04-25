import React from 'react'
import { Link } from 'react-router-dom'
// LES ICONS
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'
import Container from './element/Container'
import logolanc from '../assets/PBSLogoB.png'
import SubTitle from './element/SubTitle'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg-vert/80 absolute h-full w-full py-16">
        <Container className="text-blanc py-6 px-4 md:px-0">
          {/* &copy; 2023 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
                <img src={logolanc} alt="Variante du logo de Pro Business Services en blanc" className="w-52 mx-auto" />
                <div className="flex items-center gap-x-6 gap-y-4 my-5 justify-center">
                    <BsFacebook size={22}/>
                    <BsLinkedin size={22}/>
                    <BsTwitter size={22}/>
                </div>
            </div>

            <div>
              <SubTitle variant="h5" theme="secondary">contact</SubTitle>
              
              <address>
                <span>Mobile : (+241) 65 xxx xxx</span> <br />
                <span>contact@probusiness-services-gabon.com</span> <br />
                <span>Route Aéroport, entrée face à MOUK AUTO</span>
              </address>
            </div>

            <div>
              <SubTitle variant="h5" theme="secondary">liens utiles</SubTitle>
              <div className="flex flex-col mt-2">
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">Compagnie</Link>
                <Link to="/nettoyage">Nettoyage & Dépollution</Link>
                <Link to="/maintenances">Maintenances</Link>
                <Link to="/logistique">Logistique & Transport</Link>
                <Link to="/location">Location Engins</Link>
                <Link to="/blog">Actualité</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>

          {/* bloc de la newsletter */}
          <div>
            {/* <NewsLetter/> */}
          </div>
        </Container>
      </div>
    </footer>
  )
}
