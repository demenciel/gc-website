import React, { useState } from "react";
import microblading from "../assets/Photos site genny/Microblading /20231126_112108.png";
import freckles from "../assets/Photos site genny/Freckles/2e70c3bd-847c-4a03-b258-1fb52af2202d.png";
import eyeliner from "../assets/Photos site genny/Eyeliner-intralash/20231121_165229.jpg";
import lipblush from "../assets/Photos site genny/Lipblush /received_879035597100290.jpeg";
import ombrebrow from "../assets/Photos site genny/Ombrebrow-nanobrow/received_688841509775996.jpeg";

// Mock data for the carousel cards
const carouselData = [
  {
    title: "Ombrebrow/Nanobrow",
    imageUrl: ombrebrow,
    cta: "Learn More",
  },
  {
    title: "Freckles",
    imageUrl: freckles,
    cta: "Learn More",
  },
  {
    title: "Eyeliner",
    imageUrl: eyeliner,
    cta: "Learn More",
  },
  {
    title: "Microblading",
    imageUrl: microblading,
    cta: "Learn More",
  },
  {
    title: "Lipblush",
    imageUrl: lipblush,
    cta: "Learn More",
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

const CarouselCard = ({ title, imageUrl, cta }) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center justify-center bg-background p-4 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl tilt">
      <img
        src={imageUrl}
        alt={title}
        className="w-[272px] h-[400px] object-cover rounded-t-lg"
      />
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent transition duration-300 ease-in-out group-hover:opacity-0"></div>
      <h3 className="mt-4 text-lg font-bold py-2 absolute bottom-20 ">
        {title}
      </h3>
      <button className="mt-2 bg-primary text-white py-2 px-4 rounded-full absolute bottom-8 group-hover:drop-shadow-lg">
        {cta}
      </button>
    </div>
  );
};

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleCards = carouselData;

  return (
    <div id="ourservices" className="w-full bg-primary relative">
      <div className="pb-16 pt-10">
        <div className="w-full h-1/4 pb-8">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8 text-background">
            Our Services
          </h1>
        </div>
        <div className="w-full h-3/4">
          <div className="flex flex-col md:flex-row justify-center items-center md:px-32">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              {visibleCards.map((card, index) => (
                <CarouselCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
