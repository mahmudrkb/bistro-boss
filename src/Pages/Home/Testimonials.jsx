import React, { useEffect, useState } from "react";
import SectionsTitles from "../../Shared/SectionsTitles";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]) ;
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-10">
      <SectionsTitles
        subheading={"what our client say"}
        heading={"testimonials"}
      ></SectionsTitles>
      <div className="my-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((reviewer) => (
            <SwiperSlide key={reviewer._id}>
              <div className="text-center  w-3/5 mx-auto">
                <Rating 
                className="mx-auto my-4"
                  style={{ maxWidth: 180 }}
                  value={reviewer.rating}
                  readOnly
                />

                <p>Details{reviewer.details}</p>
                <h3 className="text-2xl font-bold mt-3 text-orange-400">
                  {reviewer.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
