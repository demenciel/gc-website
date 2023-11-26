import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo from "../assets/Photos site genny/logo-transparent-primary.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // This ensures the navbar takes the full width and does not shrink or grow disproportionately
    <div className="flex h-[128px] text-lg flex-grow items-center justify-between w-full py-6 p-section-padding lg:p-section-padding-xl">
      <div className="">
        <img src={logo} alt="logo" className="h-24" />{" "}
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu color="#ECD8BD" />
      </button>
      <div className="flex space-x-4 hidden md:flex">
        <a href="#header">Accueil</a>
        <a href="#ourservices">Services</a>
        <a href="#">À propos</a>
      </div>
      <div className="flex space-x-4 hidden md:flex">
        <button className="px-8 py-2">
          <span href="#" className="text-primary">
            Prendre rendez-vous
          </span>
        </button>
      </div>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <div
          style={{ width: "200px" }}
          className="bg-background flex flex-col items-center justify-center h-full space-y-8"
        >
          <a href="#header">Accueil</a>
          <a href="#ourservices">Services</a>
          <a href="#">À propos</a>
          <button className="px-8 py-2">
            <span href="#" className="text-primary">
            Prendre rendez-vous
            </span>
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
