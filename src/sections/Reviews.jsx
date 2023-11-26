import React, { useEffect, useState } from "react";
import ombrebrow from "../assets/Photos site genny/Ombrebrow-nanobrow/received_688841509775996.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="group flex cursor-pointer w-[260px] h-[300px] flex-col items-center justify-evenly bg-background p-4 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl tilt">
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

  const url = `https://graph.facebook.com/v10.0/${pageId}/ratings?access_token=${accessToken}`;
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setRatings(data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchRatings();
  }, []);

  return (
    <div id="reviews" className="w-full bg-primary relative">
      <div className="pb-16 pt-10">
        <div className="w-full h-1/4 pb-8">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8 text-background">
            Customer Reviews
          </h1>
        </div>
        <div className="w-full h-3/4 px-8 md:px-32">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {carouselData.map((card, index) => (
              <SwiperSlide key={index}>
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
