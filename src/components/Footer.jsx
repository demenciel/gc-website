import React from "react";
import logo from "../assets/Photos site genny/logo-transparent-primary.png";

import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full flex flex-col justify-center items-center border-t-2 py-8"
    >
      <div className="w-[128px] h-[128px]">
        <img src={logo} alt="" className="object-cover" />
      </div>
      <div className="flex space-x-10">
        <a
          href="https://www.facebook.com/profile.php?id=100064845977672"
          className="icon-link"
        >
          <FacebookOutlined
            fontSize="large"
            className="icon-image text-primary"
          />
        </a>
        <a
          href="https://www.instagram.com/genny.sante.beaute/"
          className="icon-link"
        >
          <Instagram fontSize="large" className="icon-image text-primary" />
        </a>
        <a href="mailto:gennysantebeaute@gmail.com" className="icon-link">
          <EmailOutlined fontSize="large" className="icon-image text-primary" />
        </a>
      </div>
      <p className="mt-2">
        <span className="text-primary">Propulsé par Alexandre Couture  © 2023 </span>
      </p>
    </div>
  );
};

export default Footer;
