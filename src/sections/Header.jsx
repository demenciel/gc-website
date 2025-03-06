import React from "react";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import cryo from "../assets/photo thermocryothérapie.jpg";

const Header = ({ lady, ellipse }) => {
  return (
    <div
      id="header"
      className="h-full-screen flex flex-col items-center overflow-hidden relative"
    >
      

      <div className="absolute inset-0 z-0 h-full-screen">
        <img
          src={cryo}
          alt="background"
          className="w-full h-full object-cover object-center"
        />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent" style={{ height: '40%', top: 0 }}></div>
      </div>
    </div>
  );
};

export default Header;
