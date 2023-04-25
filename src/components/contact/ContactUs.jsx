import React from 'react'
import Container from '../element/Container'
import Contact from '../../assets/images/pbs-contact.png'
// les icons
import { BsFillEnvelopeFill, BsFillGeoAltFill, BsFillTelephoneFill} from 'react-icons/bs'

export default function ContactUs() {
  return (
    <section className="my-20 px-4">
        <Container>
            <div className="grid md:grid-cols-2">
                <div className="my-auto w-[70%]">
                    <div className="flex justify-start items-center border-b-4 border-vert w-full">
                        <div className="bg-vert p-4 rounded-full text-blanc mb-4 mr-4 uppercase ">
                            <BsFillTelephoneFill size={40}/>
                        </div>
                        <span className="font-semibold mb-4">Téléphone : <br /> (+241) 65 XXX XXX </span>
                    </div>

                    <div className="flex justify-start items-center border-b-4 border-vert w-full mt-6">
                        <div className="bg-vert p-4 rounded-full text-blanc mb-4 mr-4 uppercase">
                            <BsFillEnvelopeFill size={40}/>
                        </div>
                        <span className="font-semibold mb-4">Email : <br /> contact@probusiness-services-gabon.com </span>
                    </div>

                    <div className="flex justify-start items-center border-b-4 border-vert w-full mt-6">
                        <div className="bg-vert p-4 rounded-full text-blanc mb-4 mr-4 uppercase">
                            <BsFillGeoAltFill size={40}/>
                        </div>
                        <span className="font-semibold mb-4">Email : <br /> contact@probusiness-services-gabon.com </span>
                    </div>

                </div>
            {/* l'image est dans ce bloc */}
                <div className="mt-6 md:mt-0">
                    <img src={Contact} alt="Illustration" className="mx-auto" />
                </div>
            </div>
        </Container>
        
    </section>
  )
}
