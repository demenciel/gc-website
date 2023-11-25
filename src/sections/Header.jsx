import React from "react";
import lady from "../assets/beautiful-woman-white-dress-white-background-portrait-with-beautiful-long-hair-touching-face 1.png";
import ellipse from "../assets/Ellipse 11.png";
import ctaImage from "../assets/Photos site genny/Microblading /received_3770256186538508.jpeg";

import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { FacebookOutlined } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
const Header = () => {
  return (
    <div
      id="header"
      className="header flex flex-col items-center overflow-hidden"
    >
      <div className="flex flex-col flex-grow md:flex-row lg:flex-row ">
        <div className="p-8 md:w-1/2 lg:w-1/2 flex flex-grow relative justify-center items-center">
          <div className="w-3/4 h-full">
            <h1 className="text-3xl md:text-6xl font-bold text-primary">
              Genny Santé & Beauté
            </h1>
            <br />
            <h3 className="text-lg md:text-2xl pb-4 md:pb-8 lg:pb-12">
              Spécialiste en micropigmentation & maquillage permanent
            </h3>
          </div>
        </div>
        {/* image principale */}
        <div className="md:w-1/2 lg:w-1/2 flex justify-end items-end relative">
          <img className="object-cover z-10" src={lady} alt="lady" />
          <img
            src={ellipse}
            className="absolute z-0 w-3/4 left-20 opacity-50 top-14"
            alt="ellipse"
          />
          <div className="absolute inset-0 z-0 opacity-50">
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
      <div className="w-full h-[64px] sm:h-[128px] bg-primary text-[#000] flex items-center pl-16 absolute bottom-0">
        <div className=" hidden md:flex space-x-20">
          <span className="w-[128px]">
            <DiamondOutlinedIcon fontSize="large" />
            <p className="py-2">Services de Qualités</p>
          </span>
          <span className="w-[128px]">
            <WorkspacePremiumOutlinedIcon fontSize="large" />
            <p className="py-2">
              Quality <br /> Services
            </p>
          </span>
          <span className="w-[128px]">
            <ThumbUpOffAltOutlinedIcon fontSize="large" />
            <p className="py-2">Satisfaction Garanti</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
