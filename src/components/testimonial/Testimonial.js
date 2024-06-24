import React from "react";
import "./Testimonial.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <h5>A bit About me</h5>
            <h2>Now & Education</h2>

            <Swiper className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}} >

            <SwiperSlide className="testimonial">
                <h4 className="client__name">Experiences</h4>
                <small className="client__review">
                    <ul>
                        <b>
                            
                        </b>
                    </ul>
                    <ul>
                        <b>
                            Secured Global Rank 276th, 1175th, 1280th and 344th in CodeChef Contests.
                        </b>
                    </ul>
                    <ul>
                        <b>
                           
                        </b>
                    </ul>
                    <ul>
                        <b>
                            Solved more than <b>100+</b> problems on LeetCode and Rank among top <b>3.2%</b>
                        </b>
                    </ul>
                    <ul>
                        <b>
                         
                        </b>
                    </ul>
                </small>
            </SwiperSlide>

          
        </Swiper>
        </section>
    )
}

export default Testimonial