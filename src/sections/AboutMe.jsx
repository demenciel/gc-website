import React from "react";

import gennydiploma from "../assets/photo de moi en bas .jpg";
import genny from "../assets/photo en bas completement.jpg";
import acc from "../assets/dots.webp";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="w-full h-full-screen py-8 md:py-32 flex flex-col flex-grow md:flex-row lg:flex-row overflow-hidden justify-evenly"
    >
      <div className="w-full h-full relative flex flex-col flex-grow md:flex-row lg:flex-row justify-evenly">
        <div className="hidden md:w-1/5 md:flex relative">
          <div className="absolute bottom-top right-0 opacity-100 ">
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
          <img src={acc} alt="" className="absolute right-[-34px] bottom-10" />
          <img src={genny} alt="" className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 px-8 py-8 md:py-0">
          <h1 className=" pb-8 md:pb-16 font-bold text-xl md:text-5xl text-text">
            L'expertise rencontre le bien-être chez Genny Santé & Beauté.
          </h1>
          <p className="text-justify text-text">
            Bienvenue chez Genny Santé & Beauté, votre destination privilégiée pour l'excellence en remodelage corporel, formations professionnelles et accompagnement holistique. Nos services sont destinés à vous accompagner vers un bien-être et une liberté, tout en respectant votre unicité et vos objectifs ! Notre équipe d'experts, formée aux dernières technologies et tendances, s'engage à vous offrir une expérience inoubliable. La confiance de notre précieuse clientèle est au coeurs de notre mission. Essayer c'est l'adopter, être bien dans sa peau n'est pas un luxe!
          </p>
        </div>
        <div className="w-full md:w-1/5 md:flex relative">
          <img src={acc} alt="" className="absolute left-[-32px] top-10" />
          <img src={gennydiploma} alt="" className="object-cover" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
