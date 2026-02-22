import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
} from "@mui/icons-material";
import React from "react";

const Sidebar = ({ isQuebec }) => {
  const facebookLink = isQuebec ? "https://www.facebook.com/share/1HKg8djioe/" : "https://www.facebook.com/share/17BHAymXyW/";
  return (
    <div
      id="sidebar"
      className="hidden md:flex w-[64px] md:w-[64px] h-full z-10 fixed top-1/2 -translate-y-1/2 flex flex-col p-8 justify-center"
    >
      <div id="sidebar-icons" className="h-1/2 flex flex-col justify-evenly">
        <a
          href={facebookLink}
          className="icon-link text-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookOutlined fontSize="large" className="text-text hover:text-text hover:cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/gennysantebeaute?igsh=MW9kb25tMTN6bHl1Mw=="
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" className="text-text hover:text-text hover:cursor-pointer" />
        </a>
        <a href="mailto:gennysantebeaute@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
          <EmailOutlined fontSize="large" className="text-text hover:text-text hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
