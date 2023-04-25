// LES ICONS
import {BsFacebook, BsLinkedin, BsTwitter, BsTelephoneFill, BsPinMapFill, BsEnvelopeFill} from 'react-icons/bs'
import Container from './element/Container'

export default function TopBar() {
  return (
    <section>
        <div className="grid md:grid-cols-2 text-sm">
            {/* le bloc vert */}
            <div className='bg-vert text-blanc p-3'>
                <Container className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className='flex items-center gap-2'>
                        <BsEnvelopeFill size={20}/> <span>contact@probusiness-services-gabon.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsPinMapFill size={20}/> <span>Route Aéroport, entée MOUK Auto</span>
                    </div>
                </Container>
            </div>

            {/* le bloc bleu */}
            <div className='bg-bleu text-blanc p-3'>
                <Container className="flex items-center justify-center gap-6">
                    <div className='flex items-center gap-4'>
                        <BsFacebook size={20}/>
                        <BsLinkedin size={20}/>
                        <BsTwitter size={20}/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsTelephoneFill size={20}/> <span>(+241) 65 xxx xxx </span>
                    </div>
                </Container>
            </div>

        </div>
    </section>
  )
}
