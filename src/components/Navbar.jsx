import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // This ensures the navbar takes the full width and does not shrink or grow disproportionately
    <div className="flex h-[128px] text-lg flex-grow items-center justify-between w-full py-6 p-section-padding">
      <div>
        <img src={logo} alt="logo" className="h-8" />{" "}
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu color="#ECD8BD"/>
      </button>
      <div className="flex space-x-4 hidden md:flex">
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
        <a href="#">Services</a>
      </div>
      <div className="flex space-x-4 hidden md:flex">
        <button className="px-8 py-2">
          <span href="#" className="text-primary">Services</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
