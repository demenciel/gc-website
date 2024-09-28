import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../public/styles.css";
// photos
import microblading from "../assets/Photos site genny/Microblading /microblading.png";
import freckles from "../assets/Photos site genny/Freckles/freckles.webp";
import eyeliner from "../assets/Photos site genny/Eyeliner-intralash/eyeliner.jpg";
import lipblush from "../assets/Photos site genny/Lipblush /lipblush.webp";
import ombrebrow from "../assets/Photos site genny/Ombrebrow-nanobrow/ombrebrow.jpg";
import micropigmentation from "../assets/Photos site genny/Micropigmentation capillaire /micropigmentation-capillaire.jpeg";
//videos
import microbladingombrebrowvideo from "../assets/Photos site genny/video/microblading-ombrebrow.mp4";
import micropigmentationvideo from "../assets/Photos site genny/video/micropigmentation.mp4";
import frecklesvideo from "../assets/Photos site genny/video/frecklesvideo.mp4";
import lipblushvideo from "../assets/Photos site genny/video/lipblush.mp4";
import eyelinerintralashvideo from "../assets/Photos site genny/video/eyeliner.mp4";
import VideoModal from "../components/Video";

// Mock data for the carousel cards
const carouselData = [
  {
    title: "Ombrebrow/Nanobrow",
    imageUrl: ombrebrow,
    video: microbladingombrebrowvideo,
  },
  {
    title: "Freckles",
    imageUrl: freckles,
    video: frecklesvideo,
  },
  {
    title: "Eyeliner/Intralash",
    imageUrl: eyeliner,
    video: eyelinerintralashvideo,
  },
  {
    title: "Microblading",
    imageUrl: microblading,
    video: microbladingombrebrowvideo,
  },
  {
    title: "Lipblush",
    imageUrl: lipblush,
    video: lipblushvideo,
  },
  {
    title: "Micropigmentation capillaire",
    imageUrl: micropigmentation,
    video: micropigmentationvideo,
  },
];

const CarouselCard = ({ title, imageUrl, video }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[300px] group flex flex-col items-center justify-center bg-background p-4 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
        <div className="relative w-full h-[380px] overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition duration-300 ease-in-out group-hover:opacity-0"></div>
          <h3 className="absolute bottom-16 left-0 right-0 text-lg font-bold text-cta text-center">
            {title}
          </h3>
          <button
            onClick={() => setOpenModal(true)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-2 bg-cta text-background py-2 px-4 text-sm rounded-full group-hover:drop-shadow-lg"
          >
            Recommandations
          </button>
        </div>
      </div>
      <VideoModal
        open={openModal}
        setOpenModal={setOpenModal}
        video={video}
      />
    </div>
  );
};

const OurServices = () => {
  return (
    <div id="ourservices" className="w-full bg-primary relative py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-12 text-background">
          Nos services
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
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
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
    </div>
  );
};

export default OurServices;
