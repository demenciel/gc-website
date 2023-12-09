import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // basic Swiper styles
import "swiper/css/pagination";

// photos
import microblading from "../assets/Photos site genny/Microblading /20231126_112108.png";
import freckles from "../assets/Photos site genny/Freckles/2e70c3bd-847c-4a03-b258-1fb52af2202d.png";
import eyeliner from "../assets/Photos site genny/Eyeliner-intralash/8b154c47-db7c-4fa1-89aa-26fde0c696b1.png";
import lipblush from "../assets/Photos site genny/Lipblush /received_879035597100290.jpeg";
import ombrebrow from "../assets/Photos site genny/Ombrebrow-nanobrow/400235384_1087187132437627_5368917197133462338_n (1).jpg";
import micropigmentation from "../assets/Photos site genny/Micropigmentation capillaire /received_2082407108783656.jpeg";
//videos
import microbladingombrebrowvideo from "../assets/Photos site genny/video/microblading-ombrebrow.mp4";
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
    video: "",
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
    video: "",
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
      <div className="w-[300px] md:w-3/4 group flex cursor-pointer flex-col items-center justify-center bg-background p-4 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl tilt">
        <img
          src={imageUrl}
          alt={title}
          className="w-[272px] h-[380px] object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent transition duration-300 ease-in-out group-hover:opacity-0"></div>
        <h3 className="mt-4 text-lg font-bold py-2 absolute bottom-20 ">
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
      <VideoModal open={openModal} setOpenModal={setOpenModal} video={video} />
    </>
  );
};

const OurServices = () => {
  return (
    <div id="ourservices" className="w-full bg-primary relative">
      <div className="pb-16 pt-10">
        <div className="w-full h-1/4 pb-8">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8 text-background">
            Nos services
          </h1>
        </div>
        <div className="w-full h-full sm:px-16 md:px-32">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={40} // Add space between slides
            slidesPerView={1}
            centeredSlides={true} // Center the active slide
            loop={true} // Enable looping
            speed={500} // Transition speed
            autoHeight={true} // Adjust height to the active slide
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
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

export default OurServices;
