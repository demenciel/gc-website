import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../public/styles.css";
// photos
import cryo from "../assets/Photos site genny/Carousel-1/cryolipolyse -B-FREEZE).png";
import lipocavitation from "../assets/Photos site genny/Carousel-1/Lipocavitation.png";
import maderothérapie from "../assets/Photos site genny/Carousel-1/Maderothérapie.png";
import soinminceursanschirurgie from "../assets/Photos site genny/Carousel-1/soin-minceur-sans-chirurgie.jpg";

// Mock data for the carousel cards
const carouselData = [
  {
    title: "Thermocryothérapie",
    imageUrl: cryo,
  },
  {
    title: "Lipocavitation",
    imageUrl: lipocavitation,
  },
  {
    title: "Maderothérapie",
    imageUrl: maderothérapie,
  },
  {
    title: "Soin minceur sans chirurgie",
    imageUrl: soinminceursanschirurgie,
  },
];

const CarouselCard = ({ title, imageUrl, video }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[300px] group flex flex-col items-center justify-center bg-background shadow-md rounded-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
        <div className="relative w-full h-[380px] overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition duration-300 ease-in-out group-hover:opacity-0"></div>
          {/* when card is hover */}
          <h3 className="absolute bottom-24 left-0 right-0 text-lg font-bold text-background text-center group-hover:text-title">
            {title}
          </h3>
          <button
            onClick={() => setOpenModal(true)}
            className="absolute w-3/4 bottom-4 left-1/2 transform -translate-x-1/2 mt-2 bg-title py-2 px-4 text-sm rounded-full group-hover:drop-shadow-lg"
          >
            <a
              href="https://www.gorendezvous.com/gennysantebeaute?companyId=134391"
              target="GOrendezvous"
              className="text-background
              "
            >
              Prendre un rendez-vous
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const OurSpecialities = () => {
  return (
    <div id="ourservices" className="w-full bg-background relative py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-12 text-text">
          Nos spécialités
        </h1>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={500}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {carouselData.map((card, index) => (
              <SwiperSlide key={index}>
                <CarouselCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !text-cta" onClick={() => {
            const swiper = document.querySelector('.swiper');
            swiper.swiper.slidePrev();
          }}></div>
          <div className="swiper-button-next !text-cta" onClick={() => {
            const swiper = document.querySelector('.swiper');
            swiper.swiper.slideNext();
          }}></div>
        </div>
      </div>
      <h3 className="text-lg mt-4 text-title font-bold">
        *APPAREILS DE HAUTE EFFICACITÉ APPROUVÉS PAR SANTÉ CANADA
      </h3>
    </div>
  );
};

export default OurSpecialities;
