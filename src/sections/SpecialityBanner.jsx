import React from "react";

import group from "../assets/speciality-banner-bars.webp";
import image2 from "../assets/photo-service-qualité.png";

const SpecialityBanner = () => {
  return (
    <div
      id="specialitybanner"
      className="bg-background2 w-full px-8 mb-8 md:px-16 h-full-screen relative flex flex-grow flex-col md:flex-row md:flex-row overflow-clip justify-evenly items-center"
    >
      <div className=" absolute bottom-top right-0 opacity-50 md:w-[512px] w-[256px] object-scale-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          opacity="0.54"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="81"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="194"
              ry="192"
              cx="375.5145082158747"
              cy="388.6133967390944"
              fill="#ecd8bdff"
            ></ellipse>
          </g>
        </svg>
      </div>

      <div className="sm:w-3/4 sm:flex sm:p-32">
        <img src={image2} className="object-cover" />
      </div>
      <img
        src={group}
        className="rotate-[75deg] object-scale-down hidden md:block absolute right-[-50px] z-0 bottom-[-70px] md:w-1/4 w-1/2"
      />
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center md:pl-10 space-y-4 z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-title mb-4">
          Services de qualités
        </h1>
        <p className="text-text pb-4 text-md">
          Spécialisées en remodelage corporel, nos cliniques vous offrent un éventail de soins ainsi que des formations professionnelles de qualité.
          Notre approche globale et bienveillante place votre bien-être au cœur de chaque étape, afin de vous guider vers une transformation durable et complète.

          Grâce à l’alliance des technologies avancées, de la naturopathie et de notre expertise en coaching, nous vous accompagnons de A à Z dans la réalisation de vos objectifs.

          En partenariat avec la Clinique Moderma Signature à Québec et la Clinique Mademoiselle à Chicoutimi, nous mettons également à votre disposition une gamme élargie de services réunis sous un même toit, pour répondre à tous vos besoins.
        </p>
        <button className="px-8 py-2 w-full self-center md:self-start lg:w-1/2 bg-primary text-background">
          <div
            data-professionalpagename="gennysantebeaute"
            data-bookingwidgeturlparams="companyId=134391"
            data-language="fr"
            data-label="Prendre un rendez-vous"
            data-url="https://www.gorendezvous.com/"
            class="gorendezvous-button"
            data-buttoncolor="inverse"
            data-width="280px"
            data-height="50px"
          >
            <a
              href="https://www.gorendezvous.com/gennysantebeaute?companyId=134391"
              target="GOrendezvous"
              className="text-background"
            >
              Prendre un rendez-vous
            </a>
          </div>
        </button>
      </div>
      <div className="hidden md:flex absolute bottom-0 left-[-140px] opacity-50 w-[512px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          opacity="0.54"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="81"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="194"
              ry="192"
              cx="375.5145082158747"
              cy="388.6133967390944"
              fill="#ecd8bdff"
            ></ellipse>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SpecialityBanner;
