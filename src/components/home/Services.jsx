// import des SVG des services
import {services} from '../../data'
import Container from '../element/Container'
import SubTitle from '../element/SubTitle'
import SingleServices from "../SingleServices"

export default function Services() {
  return (
    <section className="my-2 serviceBackground">
        <div className="bg-gradient-to-t from-bleu to-vert/60 w-full h-full px-4">
            <Container className="py-24">
                {/* bloc titre */}
                <SubTitle variant="h2" theme="secondary" className="text-2xl font-bold uppercase text-center text-blanc">
                    services
                    <div className="w-4 h-4 bg-blanc mx-auto mt-3"></div>
                </SubTitle>

                {/* les services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">

                    {/* Appel du composant singleservice pour afficher les services*/}
                        {
                            services.map(item => {
                                return (
                                    <SingleServices key={item.id} 
                                        title={item.title} 
                                        ImgServ={item.ImgServ}
                                        route={item.route}
                                    />
                                )
                            })
                        }
                        
                </div>
            </Container>
        </div>
    </section>
  )
}
