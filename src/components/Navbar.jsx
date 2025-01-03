import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";


const Navbar = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background relative flex h-[128px] text-lg items-center justify-between w-full py-6 p-section-padding lg:p-section-padding-xl z-20 border-b border-primary">
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="h-24" />
      </div>
      <button className="md:hidden bg-primary text-background" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu color="#ECD8BD" />
      </button>
      <div className="hidden md:flex text-primary space-x-4 flex-grow justify-center hover:text-text hover:cursor-pointer">
        <a href="#header" className="text-text hover:text-primary hover:cursor-pointer">
          Accueil
        </a>
        <a href="#ourservices" className="text-text hover:text-primary hover:cursor-pointer">
          Services
        </a>
        <a href="#aboutme" className="text-text hover:text-primary hover:cursor-pointer">
          À propos
        </a>
      </div>
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-primary hover:text-text hover:cursor-pointer">
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
          <a href="#header" className="text-primary">
            Accueil
          </a>
          <a href="#ourservices" className="text-primary">
            Services
          </a>
          <a href="#aboutme" className="text-primary">
            À propos
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
