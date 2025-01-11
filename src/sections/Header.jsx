import React from "react";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";

const Header = ({ lady, ellipse }) => {
  return (
    <div
      id="header"
      className="header flex flex-col items-center overflow-hidden relative"
    >
      <div className="flex flex-col flex-grow md:flex-row lg:flex-row ">
        {/* Text content */}
        <div className="flex flex-col justify-center items-start mx-auto md:mx-0 w-3/4 md:w-1/2 z-10 md:mt-[-64px] mt-[32px]">
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-3xl md:text-5xl text-title">
              Bienvenue dans votre Clinique de Médecine Esthétique
            </h1>
            <br />
            <h3 className="text-lg md:text-2xl py-4 md:py-8 lg:pb-12 text-text">
              Beauté, bien être et confiance en soi.
            </h3>
          </div>
        </div>
        {/* Image container */}
        <div className="md:absolute md:right-0 md:bottom-0 flex justify-center md:max-w-[572px] w-full md:w-1/2">
          <img
            className="object-cover z-10 lg:w-[70%] md:w-[90%] sm:w-[60%] w-[100%] h-auto"
            src={lady}
            alt="lady"
          />
        </div>
      </div>

      {/* Bottom banner */}
      <div className=" w-full h-[64px] sm:h-[128px] bg-text text-[#000] flex items-center pl-16 absolute bottom-0">
        <div className="hidden md:flex xl:space-x-20">
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
