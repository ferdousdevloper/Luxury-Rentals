import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slidersStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Sliders = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="absolute top-4 z-10 border w-full mx-auto text-center">
            <div className="border-red-500 w-1/2 border mx-auto">
            <h1 className="text-yellow-600 font-gilda text-4xl md:text-8xl font-bold">
              Luxury Rentals
            </h1>
            
            <div className="inset-0 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl px-8 py-2 mt-8"><p className=" text-[#C9BDAB] font-medium text-2xl ">LIVE like a king in our best houses</p></div>
            <div></div>
            </div>
          </div>
          {/* slide 1 */}
          <SwiperSlide className="slide1 slide"></SwiperSlide>
          <SwiperSlide className="slide2 slide">Slide 2</SwiperSlide>
          <SwiperSlide className="slide3 slide">Slide 4</SwiperSlide>
          <SwiperSlide className="slide4 slide">Slide 5</SwiperSlide>
          <SwiperSlide className="slide5 slide">Slide 3</SwiperSlide>
          <SwiperSlide className="slide6 slide">Slide 6</SwiperSlide>
          <SwiperSlide className="slide7 slide">Slide 7</SwiperSlide>
          <SwiperSlide className="slide8 slide">Slide 8</SwiperSlide>
          <SwiperSlide className="slide9 slide">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
