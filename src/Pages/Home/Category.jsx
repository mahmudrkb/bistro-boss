import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionsTitles from "../../Shared/SectionsTitles";

// import required modules

const Category = () => {
  return (
    <div className="my-5">
      <SectionsTitles subheading={"from 11.00am to 10.00pm"}
      heading={"order online "}>
        
      </SectionsTitles>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 shadow-xl"> salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 shadow-xl"> pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 shadow-xl"> soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16 shadow-xl"> cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16 shadow-xl"> salad</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
