import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
} from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="hidden md:flex w-[64px] md:w-[64px] h-full z-10 fixed top-1/2 -translate-y-1/2 flex flex-col p-8 justify-center"
    >
      <div id="sidebar-icons" className="h-1/2 flex flex-col justify-evenly">
        <a
          href="https://www.facebook.com/profile.php?id=100064845977672"
          className="icon-link text-primary"
        >
          <FacebookOutlined fontSize="large" className="text-primary hover:text-text hover:cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/genny.sante.beaute/"
          className="icon-link"
        >
          <Instagram fontSize="large" className="text-primary hover:text-text hover:cursor-pointer" />
        </a>
        <a href="mailto:gennysantebeaute@gmail.com" className="icon-link">
          <EmailOutlined fontSize="large" className="text-primary hover:text-text hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
