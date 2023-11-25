import React from "react";

import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
const Header = () => {
  return (
    <div className="h-3/4-screen flex flex-col items-center justify-center border border-sky-500">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold text-sky-500">Hello World</h1>
        </div>
        <div></div>
      </div>
      <div className="w-full h-[170px] bg-primary text-[#000] flex items-center space-x-8 px-4">
        <span>
          <DiamondOutlinedIcon fontSize="large" />
          <p className="py-2">Services de Qualités</p>
        </span>
        <span>
          <WorkspacePremiumOutlinedIcon fontSize="large" />
          <p className="py-2">Quality Services</p>
        </span>
        <span>
          <ThumbUpOffAltOutlinedIcon fontSize="large" />
          <p className="py-2">Satisfaction Garanti</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
