import React from 'react'
import Container from './element/Container'
import SubTitle from './element/SubTitle'
// les données (data.js)
import {testimonials} from '../data'
// Import Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import des modules requis
import { FreeMode, Pagination } from "swiper";

export default function Testimonial() {
  return (
    <section className="my-16 px-4">
        <Container>
            <SubTitle variant="h2" className="text-center mb-10"> témoignages </SubTitle>
            <Swiper
                spaceBetween={35}
                freeMode={true}
                pagination={{clickable: true}}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    360: {
                        slidesPerView: 1
                      },
                    640: {
                      slidesPerView: 1
                    },
                    768: {
                      slidesPerView: 2
                    },
                    1024: {
                      slidesPerView: 3
                    },
                  }}
                className="mySwiper py-6"
            >
                
                    {
                        testimonials.map(item => {
                            return (
                                <SwiperSlide className="my-10" key={item.id}>

                                    <div className="border border-vert rounded-3xl p-3 w-64 sm:w-auto md:w-auto">
                                        <div className="flex md:flex-col justify-center items-center">
                                            <img src={item.image} alt={item.title} 
                                            className="w-28 h-28 md:w-32 md:h-32 rounded-full my-3 mx-auto" />
                                            <span className="text-lg mx-auto font-bold uppercase" > 
                                                {item.title} 
                                            </span>
                                        </div>
                                        <hr className="opacity-10 mt-1 mb-2"/>
                                        <div>
                                            <p className="text-sm text-center">
                                                {item.detail}
                                            </p>
                                        </div>

                                    </div>

                                </SwiperSlide>  
                            )
                        })
                    }
                
            </Swiper>

        </Container>
    </section>
  )
}
