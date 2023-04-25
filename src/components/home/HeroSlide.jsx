import { useEffect } from "react"
// les composants réutilisables
import Container from "../element/Container";
import Titre from "../element/Titre";
// Import Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import des modules requis
import { Pagination, Navigation } from "swiper";
// Aos animation
import Aos from 'aos'
import SubTitle from "../element/SubTitle";

export default function HeroSlide() {
  // initialisation des animation(comportements)
  useEffect(() => {
    Aos.init({
      duration: 100
    });
  }, []);
  // rendu visuel de mon composant
  return (
    <>
      <Swiper
        slidesPerView={1} spaceBetween={30} loop={true} pagination={{clickable: true,}} 
        navigation={true} modules={[Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        {/* premier slide */}
        <SwiperSlide id="slide-one">
          <div className="absolute top-0 left-0 bg-noir bg-opacity-30 w-full h-full"></div>
            <Container>
            <div className="w-[90%] lg:w-1/2 bg-blanc/60 backdrop-blur-md px-3 py-2 shadow-lg 
                rounded-lg absolute bottom-[40%] right-5 lg:right-10"
                data-aos="fade-down" data-aos-delay="1000"
            >
                <Titre>Pro Business Services</Titre>
                <SubTitle className="text-2xl font-semibold" variant="h6">
                  Des professionnels pour répondre
                  efficacement à toutes vos attentes.
                </SubTitle>
              </div>
            </Container>

        </SwiperSlide>
        
        {/* deuxième slide */}
        <SwiperSlide id="slide-two">
          <div className="absolute top-0 left-0 bg-noir bg-opacity-30 w-full h-full"></div>
          <Container>
            <div className="w-[90%] lg:w-1/2 bg-blanc/60 backdrop-blur-md px-3 py-2 shadow-lg 
                rounded-lg absolute bottom-[40%] right-5 lg:right-10"
                data-aos="fade-down" data-aos-delay="1000"
            >
                <Titre>Pro Business Services</Titre>
                <h6 className="text-2xl font-semibold">
                  Des professionnels pour répondre
                  efficacement à toutes vos attentes.
                </h6>
              </div>
            </Container>
          
        </SwiperSlide>
      </Swiper>

    </>
  )
}
