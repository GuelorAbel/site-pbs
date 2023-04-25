import { useState }  from 'react'
// import des icons utiles page accueil
import { BsCalendar2EventFill, BsGraphUp, BsFillPeopleFill } from "react-icons/bs"
// Import des librairie conterup & scrolltrigger
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
// composants globaux
import Container from '../element/Container';
import SubTitle from '../element/SubTitle';

export default function AboutHome() {
    // état
    const [counterOn, setCounterOn] = useState(false);
    // comportements
    
    // affichage
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
        <section className="bg-vert text-blanc py-6 px-4">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <SubTitle variant="h2" theme="secondary" className="mb-3 md:mb-1">Un regard sur Pro Business Services</SubTitle>
              {/* Les icons & le compteur */}
              <div className="flex md:flex-row items-center gap-3 md:gap-6">
                {/* bloc 1 */}
                <div>
                  <div className="flex items-center mb-2 md:mb-1">
                    < BsCalendar2EventFill size={45}/> 
                    <span className="ml-3 text-xl font-black">
                      2013
                    </span>
                  </div>
                  <SubTitle className="text-center" variant="h5" theme="secondary">création</SubTitle>
                </div>
                {/* bloc 2 */}
                <div>
                  <div className="flex items-center mb-2 md:mb-1">
                    < BsFillPeopleFill size={45}/> 
                    <span className="ml-3 text-xl font-black">
                      {counterOn && <CountUp start={0} end={69} duration={2} />} +
                    </span>
                  </div>
                  <SubTitle className="text-center" variant="h5" theme="secondary">employés</SubTitle>
                </div>
                {/* bloc 3 */}
                <div>
                  <div className="flex items-center mb-2 md:mb-1">
                    < BsGraphUp size={45}/> 
                    <span className="ml-3 text-xl font-black">
                      + {counterOn && <CountUp start={0} end={6} duration={2} />} ans
                    </span>
                  </div>
                  <SubTitle className="text-center" variant="h5" theme="secondary">expériences</SubTitle>
                </div>
                
              </div>
            </div>
          </Container>
        </section>
      </ScrollTrigger>
  )
}
