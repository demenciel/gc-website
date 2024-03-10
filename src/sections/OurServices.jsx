import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules";
import "swiper/css"; // basic Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../../public/styles.css";
// photos
import microblading from "../assets/Photos site genny/Microblading /20231126_112108.png";
import freckles from "../assets/Photos site genny/Freckles/2e70c3bd-847c-4a03-b258-1fb52af2202d.png";
import eyeliner from "../assets/Photos site genny/Eyeliner-intralash/new.jpg";
import lipblush from "../assets/Photos site genny/Lipblush /received_879035597100290.jpeg";
import ombrebrow from "../assets/Photos site genny/Ombrebrow-nanobrow/400235384_1087187132437627_5368917197133462338_n (1).jpg";
import micropigmentation from "../assets/Photos site genny/Micropigmentation capillaire /received_2082407108783656.jpeg";
//videos
import microbladingombrebrowvideo from "../assets/Photos site genny/video/microblading-ombrebrow.mp4";
import micropigmentationvideo from "../assets/Photos site genny/video/micropigmentation.mp4";
import frecklesvideo from "../assets/Photos site genny/video/frecklesvideo.mp4";
import lipblushvideo from "../assets/Photos site genny/video/lipblush.mp4";
import eyelinerintralashvideo from "../assets/Photos site genny/video/eyeliner.mp4";
import VideoModal from "../components/Video";
import { Card } from "@mui/material";

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

const CarouselCard = ({ title, imageUrl, video }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        sx={{ maxWidth: 345, backgroundColor: "#242424" }}
        className="cursor-pointer "
      >
        <div className="w-full group flex  flex-col items-center justify-center bg-background p-4 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-[272px] h-[380px] object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent transition duration-300 ease-in-out group-hover:opacity-0"></div>
          <h3 className="mt-4 text-lg font-bold py-2 absolute bottom-20 text-cta">
            {title}
          </h3>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="mt-2 bg-cta text-background py-2 px-4 rounded-full absolute bottom-8 group-hover:drop-shadow-lg"
          >
            Recommandations
          </button>
        </div>
        <VideoModal
          open={openModal}
          setOpenModal={setOpenModal}
          video={video}
        />
      </Card>
    </>
  );
};

const OurServices = () => {
  return (
    <div id="ourservices" className="w-full bg-primary relative">
      <div className="pb-16 pt-10 h-full">
        <div className="w-full h-1/4 pb-8">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8 text-background">
            Nos services
          </h1>
        </div>
        <div className="w-full sm:px-16 md:px-32">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade]}
            spaceBetween={40} // Add space between slides
            slidesPerView={1}
            centeredSlides={true} // Center the active slide
            loop={true} // Enable looping
            speed={500} // Transition speed
            autoHeight={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            effect={"effect-fade"}
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

export default OurServices;
