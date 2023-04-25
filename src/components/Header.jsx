// Import USESTATE
import { useState } from "react"
// LES LIENS DU MENU & LE LOGO
import { Link } from "react-router-dom"
import Logo from '../assets/PBSLogo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowDown} from 'react-icons/io'
import {VscClose} from 'react-icons/vsc'
// composants globaux
import Container from "./element/Container"

export default function Header() {
    // Etat / Données
    const [nav, setNav] = useState(false);
    // Comportements
    // Rendu / Affichage
    return (
    <header>
      {/* La nav englobe toute la navigation du site */}
      <nav className="navbar bg-blanc bg-opacity-10 backdrop-blur-sm py-2 sticky top-0 left-0 z-10 shadow-sm  ">
        <Container>
          <Link to={"/"} className="flex-1">
            <img src={Logo} alt="Le logo de l'entreprise Pro Buslien" className="w-36 md:w-40"/>
          </Link>
          {/* Dans le bloc ci-après, ce trouve les routes vers les #pages */}
          <div className="flex-none">
            <ul className="menu hidden md:flex menu-horizontal px-1">
              <li className="lien"><Link to={"/"}>Accueil</Link></li>
              <li className="lien"><Link to={"/a-propos"}>Compagnie</Link></li>
              <li className="lien" tabIndex={0}>
                <Link className="flex items-center gap-1">
                  Services
                  <IoIosArrowDown />
                </Link>
                <ul className="py-4 bg-blanc w-52">
                  <li className="sous-lien"><Link to={"/nettoyage"}>Nettoyage & dépollution</Link></li>
                  <li className="sous-lien"><Link to={"/maintenances"}>Maintenances</Link></li>
                  <li className="sous-lien"><Link to={"/logistique"}>Logistique & Transport</Link></li>
                  <li className="sous-lien"><Link to={"/location"}>Location Engins</Link></li>
                </ul>
              </li>
              <li className="lien"><Link to={"/blog"}>Actualité</Link></li>
              <li className="lien"><Link to={"/contact"}>Contact</Link></li>
            </ul>
            {/* Le bouton s'affiche sur mobile et est masqué sur tablette, laptop & desktop */}
            <button className="btn flex md:hidden items-center" onClick={() => setNav(!nav)}>
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </Container>
      </nav>
      {/* menu mobile */}
      <div className={nav ? 'flex md:hidden w-[400px] bg-blanc h-screen fixed left-0 top-0 z-10 duration-300' : "fixed -left-[100%] top-0 z-10 px-0 duration-300"}>
        {/* boutton de fermeture du menu sur mobile */}
        <VscClose size={25} className="right-20 top-7 absolute cursor-pointer" onClick={() => setNav(!nav)}/>
        {/* l'affichage du menu sur mobile */}
        <ul className="menu flex pt-[25%] md:hidden menu-vertical">
            <li className="lien" onClick={() => setNav(!nav)}><Link to={"/"}>Accueil</Link></li>
            <li className="lien" onClick={() => setNav(!nav)}><Link to={"/a-propos"}>Compagnie</Link></li>
            <li className="lien" onClick={() => setNav(!nav)} tabIndex={0}>
              <Link to={""} className="flex items-center gap-1">
                Services
                <IoIosArrowDown />
              </Link>
              <ul className="py-4 bg-blanc w-52">
                <li className="sous-lien" onClick={() => setNav(!nav)}><Link to={"/nettoyage"}>Nettoyage & dépollution</Link></li>
                <li className="sous-lien" onClick={() => setNav(!nav)}><Link to={"/maintenances"}>Maintenances</Link></li>
                <li className="sous-lien" onClick={() => setNav(!nav)}><Link to={"/logistique"}>Logistique & Transport</Link></li>
                <li className="sous-lien" onClick={() => setNav(!nav)}><Link to={"/location"}>Location Engins</Link></li>
              </ul>
            </li>
            <li className="lien" onClick={() => setNav(!nav)}><Link to={"/blog"}>Actualité</Link></li>
            <li className="lien" onClick={() => setNav(!nav)}><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
