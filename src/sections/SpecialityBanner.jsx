import React from "react";

import vector from "../assets/Vector.png";
import group from "../assets/Group.png";
import image2 from "../assets/Photos site genny/Freckles/2e70c3bd-847c-4a03-b258-1fb52af2202d.png";

const SpecialityBanner = () => {
  return (
    <div
      id="specialitybanner"
      className="w-full px-8 md:px-16 h-3/4-screen relative flex flex-col flex-grow md:flex-row lg:flex-row overflow-hidden justify-evenly"
    >
      <div className=" absolute bottom-top right-0 opacity-50 w-[512px]">
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

      <div className="md:w-3/4 lg:w-3/4 relative hidden md:flex p-32">
        <img src={image2} className="object-cover" />
      </div>
      <img
        src={group}
        className="rotate-[105deg] object-cover absolute right-0 z-0 bottom-0 md:w-1/4 w-1/2"
      />
      <div className="w-full md:w-1/2 lg:w-1/2  md:text-left text-center flex flex-col justify-center pl-10 lg:pl-20 space-y-4 z-10">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Services de qualités
        </h1>
        <p className="text-white pb-4">
          Découvrez un univers de détente et de beauté. Nos traitements
          personnalisés sont conçus pour revitaliser votre corps et esprit.
          L'expertise rencontre le bien-être chez Genny Santé & Beauté.
        </p>
        <button className="px-8 py-2 w-1/2 self-center md:self-start w-full md:w-1/2">
          <span
            href="https://www.facebook.com/profile.php?id=100064845977672&sk=services"
            className="text-primary"
          >
            Prendre rendez-vous
          </span>
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
      <div className="absolute bottom-[-60px] left-0">
        <img src={vector} alt="" />
      </div>
    </div>
  );
};

export default SpecialityBanner;
