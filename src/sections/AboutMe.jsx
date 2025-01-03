import React from "react";

import gennydiploma from "../assets/Photos site genny/Freckles/genny-diplome.webp";
import genny from "../assets/Photos site genny/Freckles/genny-salon.webp";
import acc from "../assets/dots.webp";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="w-full py-8 md:py-32 flex flex-col flex-grow md:flex-row lg:flex-row overflow-hidden justify-evenly"
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
            Bienvenue chez Genny Santé & Beauté, votre destination privilégiée
            pour l'excellence en matière de maquillage permanent et
            micro-pigmentation. Fondée par Geneviève Couture, une passionnée de
            la santé et de la beauté, notre centre est dédié à rehausser la
            beauté naturelle de chaque client avec une touche personnelle et
            professionnelle. Chez Genny Santé & Beauté, nous croyons en la
            beauté qui reflète votre essence intérieure. Nos services, allant du
            maquillage permanent à des soins innovants comme la
            micro-pigmentation capillaire, sont conçus pour sublimer votre
            beauté naturelle tout en respectant votre unicité. Notre équipe
            d'experts, formée aux dernières techniques et tendances, s'engage à
            vous offrir une expérience inoubliable. Nous utilisons des produits
            de haute qualité, choisis pour leur efficacité et leur douceur,
            garantissant des résultats à la hauteur de vos attentes. La
            confiance de nos clients est au cœur de notre mission. C'est
            pourquoi nous accordons une importance particulière aux conseils et
            à l'écoute, pour des prestations entièrement adaptées à vos besoins
            et à vos envies. Rejoignez-nous chez Genny Santé & Beauté pour un
            parcours de beauté et de bien-être qui transformera non seulement
            votre apparence mais aussi votre sentiment de bien-être intérieur.
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
