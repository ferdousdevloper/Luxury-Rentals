import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slidersStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

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
          <div className="absolute z-10  w-full h-full top-[30%] md:top-[15%] mx-auto text-center">
            <div className="md:w-1/2 mx-auto">
            <h1 className="text-yellow-600 font-gilda text-4xl md:text-8xl font-bold">
              Luxury Rentals
            </h1>
            <h1 className="mt-5 text-white text-3xl md:text-5xl font-semibold">Your luxurious home <br />is waiting for you</h1>
            <div className="inset-0 mx-10 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl px-8 py-2 mt-8"><p className=" text-[#C9BDAB] font-medium text-2xl ">LIVE like a king in our best houses</p></div>
            <div></div>
            <p className="text-white mt-5 text-xl font-semibold">We have more than 7,000 luxurious <br /> properties around to world to show you</p>
            <div className="flex justify-center items-center gap-5">
              <Link to='/login' className="btn mt-5 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl text-white px-8">Explore More</Link>
              <Link to='/register' className="btn mt-5 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl text-white px-8">Join Now</Link>
            </div>
            </div>
          </div>
          {/* slide 1 */}
          <SwiperSlide className="slide1 slide"></SwiperSlide>
          <SwiperSlide className="slide2 slide"></SwiperSlide>
          <SwiperSlide className="slide3 slide"></SwiperSlide>
          <SwiperSlide className="slide4 slide"></SwiperSlide>
          <SwiperSlide className="slide5 slide"></SwiperSlide>
          <SwiperSlide className="slide6 slide"></SwiperSlide>
          <SwiperSlide className="slide7 slide"></SwiperSlide>
          <SwiperSlide className="slide8 slide"></SwiperSlide>
          <SwiperSlide className="slide9 slide"></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
