import React from "react";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";

const Header = ({ lady, ellipse }) => {
  return (
    <div
      id="header"
      className="header flex flex-col items-center overflow-hidden relative md:-translate-y-0  "
    >
      <div className="flex flex-col flex-grow md:flex-row lg:flex-row ">
        <div className="p-8 md:w-1/2 lg:w-1/2 flex flex-grow relative justify-center items-center">
          <div className="w-3/4 h-full flex flex-col justify-center mb-8">
            <h1 className="text-3xl md:text-6xl font-bold text-cta">
              Genny Santé & Beauté
            </h1>
            <br />
            <h3 className="text-lg md:text-2xl py-4 md:py-8 lg:pb-12 text-cta">
              Spécialiste en remodelage corporel et Nanopigmentation
            </h3>
          </div>
        </div>
        {/* image principale */}
        <div className="md:w-1/2 lg:w-1/2 flex justify-end items-end relative">
          <img className="object-cover z-10" src={lady} alt="lady" />
          <img
            src={ellipse}
            className="object-cover absolute z-0 opacity-50 xl:left-[-10px] bottom-[-140px]"
            alt="ellipse"
          />
          <div className="absolute inset-0 z-0 opacity-50 bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev/svgjs"
              viewBox="0 0 800 800"
              opacity="0.44"
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
                    stdDeviation="130"
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
                  rx="150"
                  ry="150"
                  cx="386.3280516971847"
                  cy="392.95924856241805"
                  fill="hsla(0, 0%, 100%, 1.00)"
                ></ellipse>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className=" w-full h-[64px] sm:h-[128px] bg-primary text-[#000] flex items-center pl-16 absolute bottom-0">
        <div className=" hidden md:flex xl:space-x-20">
          <span className="w-[128px] text-background">
            <DiamondOutlinedIcon fontSize="large" />
            <p className="py-2">Services de Qualités</p>
          </span>
          <span className="w-[128px] text-background">
            <WorkspacePremiumOutlinedIcon fontSize="large" />
            <p className="py-2">Reconnue et certifiée</p>
          </span>
          <span className="w-[128px] text-background">
            <ThumbUpOffAltOutlinedIcon fontSize="large" />
            <p className="py-2">Satisfaction Garanti</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
