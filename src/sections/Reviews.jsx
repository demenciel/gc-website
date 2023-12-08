import React, { useEffect, useState } from "react";
import ombrebrow from "../assets/Photos site genny/Ombrebrow-nanobrow/received_688841509775996.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // basic Swiper styles
import "swiper/css/navigation"; // if you are using navigation module
import "swiper/css/pagination";

const carouselData = [
  {
    imageUrl: ombrebrow,
    review:
      "hfjksah;fjksa jskafh askljhfksahf ksahlkf hsljkah fklasj fhkashf a",
    customer: "Lindsay",
  },
];

<style jsx>{`
  .tilt:hover {
    cursor: pointer;
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
  }
  .tilt:hover {
    cursor: pointer;
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
  }
`}</style>;

const CarouselCard = ({ review, imageUrl, customer }) => {
  return (
    <div className="group flex cursor-pointer w-[260px] h-[300px] flex-col items-center justify-evenly bg-background p-4 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:shadow-2xl tilt">
      <div className="flex justify-start">
        <img
          src={imageUrl}
          alt={customer}
          className="w-[96px] h-[96px] object-cover rounded-full"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold py-2">{review}</h3>
      <h4 className="mt-2 text-lg font-bold py-2">- {customer}</h4>
    </div>
  );
};

const Reviews = () => {
  const [ratings, setRatings] = useState([]);
  const pageId = "100064845977672";
  const accessToken = import.meta.env.VITE_FACEBOOK_TOKEN;

  /* const url = `https://graph.facebook.com/v10.0/${pageId}/ratings?access_token=${accessToken}`;
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRatings(data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchRatings();
  }, []); */

  return (
    <div id="reviews" className="w-full h-3/4-screen bg-primary relative">
      <div className="pb-16 pt-10">
        <div className="w-full h-1/4 pb-8">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8 text-background">
            Customer Reviews
          </h1>
        </div>
        <div className="w-full h-3/4 px-8 md:px-32">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={40} // Add space between slides
            slidesPerView={1}
            centeredSlides={true} // Center the active slide
            loop={true} // Enable looping
            speed={500} // Transition speed
            autoHeight={true} // Adjust height to the active slide
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50, // Slide rotate in degrees
              stretch: 0, // Stretch space between slides (in px)
              depth: 100, // Depth offset in px (slides translate in Z axis)
              modifier: 1, // Effect multiplier
              slideShadows: true, // Enables slides shadows
            }}
            freeMode={true} // Enable free mode
          >
            {carouselData.map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <CarouselCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
