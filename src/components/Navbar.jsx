import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";


const Navbar = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute flex h-[128px] text-lg items-center justify-between w-full py-6 px-12 z-20 border-b border-primary">
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="w-48 object-cover object-center" />
      </div>
      <button className="md:hidden bg-primary text-background" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu color="#ECD8BD" />
      </button>
      <div className="hidden md:flex text-primary space-x-8 sm:space-x-16 md:space-x-16 lg:space-x-32  flex-grow justify-center">
        <a href="#header" className="text-white hover:text-primary!important text-lg font-bold tracking-wider relative group
                     transition-all duration-300 ease-in-out">
          <span>Accueil</span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#ourspecialities" className="text-white hover:text-primary!important text-lg font-bold tracking-wider relative group
                     transition-all duration-300 ease-in-out">
          <span>Services</span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#aboutme" className="text-white hover:text-primary!important text-lg font-bold tracking-wider relative group
                     transition-all duration-300 ease-in-out">
          <span>À propos</span>
          <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-text hover:text-text hover:cursor-pointer">
          <div
            data-professionalpagename="gennysantebeaute"
            data-bookingwidgeturlparams="companyId=134391"
            data-language="fr"
            data-label="Prendre un rendez-vous"
            data-url="https://www.gorendezvous.com/"
            className="gorendezvous-button"
            data-buttoncolor="inverse"
            data-width="280px"
            data-height="50px"
          >
            <a
              href="https://www.gorendezvous.com/gennysantebeaute?companyId=134391"
              target="GOrendezvous"
              className="text-background hover:cursor-pointer"
            >
              Prendre un rendez-vous
            </a>
          </div>
        </button>
      </div>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          style={{ width: "200px" }}
          className="bg-background flex flex-col items-center py-12 h-full space-y-8 text-primary"
        >
          <a href="#header" className="text-primary relative group transition-all duration-300 ease-in-out">
            <span>Accueil</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-text transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#ourservices" className="text-primary relative group transition-all duration-300 ease-in-out">
            <span>Services</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-text transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#aboutme" className="text-primary relative group transition-all duration-300 ease-in-out">
            <span>À propos</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-text transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button className="px-8 py-2 bg-primary text-background">
            <div
              data-professionalpagename="gennysantebeaute"
              data-bookingwidgeturlparams="companyId=134391"
              data-language="fr"
              data-label="Prendre un rendez-vous"
              data-url="https://www.gorendezvous.com/"
              class="gorendezvous-button"
              data-buttoncolor="inverse"
              data-width="280px"
              data-height="50px"
            >
              <a
                href="https://www.gorendezvous.com/gennysantebeaute?companyId=134391"
                target="GOrendezvous"
                className="text-background hover:text-text hover:cursor-pointer"
              >
                Prendre un rendez-vous
              </a>
            </div>
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
