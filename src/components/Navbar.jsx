import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo from "../assets/Photos site genny/logo-transparent-primary.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute md:relative flex h-[128px] text-lg flex-grow items-center justify-between w-full py-6 p-section-padding lg:p-section-padding-xl z-20">
      <div className="">
        <img src={logo} alt="logo" className="h-24" />{" "}
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu color="#ECD8BD" />
      </button>
      <div className="flex text-primary space-x-4 hidden md:flex ">
        <a href="#header" className="text-primary">
          Accueil
        </a>
        <a href="#ourservices" className="text-primary">
          Services
        </a>
        <a href="#aboutme" className="text-primary">
          À propos
        </a>
      </div>
      <div className="flex space-x-4 hidden md:flex">
        <button className="px-8 py-2">
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
              className="text-primary"
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
          className="bg-background flex flex-col items-center justify-center h-full space-y-8 text-primary"
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
          <button className="px-8 py-2">
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
                className="text-primary"
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
