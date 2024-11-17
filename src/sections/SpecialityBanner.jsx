import React from "react";

import group from "../assets/speciality-banner-bars.webp";
import image2 from "../assets/Photos site genny/speciality-banner-genny.png";

const SpecialityBanner = () => {
  return (
    <div
      id="specialitybanner"
      className="w-full px-8 my-8 md:px-16 h-full-screen md:h-3/4-screen relative flex flex-grow flex-col md:flex-row lg:flex-row overflow-clip justify-evenly items-center"
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

      <div className="md:w-3/4 md:flex md:p-32">
        <img src={image2} className="object-cover" />
      </div>
      <img
        src={group}
        className="rotate-[75deg] object-scale-down hidden md:block absolute right-[-50px] z-0 bottom-[-70px] md:w-1/4 w-1/2"
      />
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center md:pl-10 space-y-4 z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-cta mb-4">
          Services de qualités
        </h1>
        <p className="text-white pb-4 text-md">
          Explorez un monde de beauté et de raffinement chez Genny Santé &
          Beauté. Notre salon d'esthétique est dédié à sublimer votre apparence
          et à mettre en valeur votre bien-être. Nos services personnalisés sont
          conçus pour vous offrir une expérience de beauté exceptionnelle.
        </p>
        <button className="px-8 py-2 w-full self-center md:self-start lg:w-1/2">
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
              className="text-primary"
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
