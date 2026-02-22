import React from "react";
import logo from "../assets/logo.png";
import { EmailOutlined, LocationOn } from "@mui/icons-material";

const Footer = ({ isQuebec, setIsQuebec }) => {
  return (
    <div
      id="footer"
      className="relative w-full bg-background text-primary border-t-2 border-primary"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 object-contain mb-4"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-start text-left mb-2">
              <EmailOutlined className="mr-2" />
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <div className="flex items-center mb-2">
              <a
                href="mailto:gennysantebeaute@gmail.com"
                className="hover:text-primary"
              >
                <span className="text-text">gennysantebeaute@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center  mb-4">
              <LocationOn className="mr-2" />
              <h3 className="text-xl font-bold">Téléphone</h3>
            </div>
            <div className="flex items-center">
              {isQuebec ? (
                <a
                  className="text-text"
                  href="tel:418-551-8939"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (418) 551-8939
                </a>
              ) : (
                <a
                  className="text-text"
                  href="tel:581-993-5206"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  581-993-5206
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center  mb-4">
              <LocationOn className="mr-2" />
              <h3 className="text-xl font-bold">Adresse</h3>
            </div>
            <div className="flex items-center">
              {isQuebec ? (
                <a
                  className="text-text"
                  href="https://www.google.com/maps/place/6021+Bd+Wilfrid-Hamel,+L'Ancienne-Lorette,+QC+G2E+2H3/@46.8195505,-71.2436363,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb883834e666667:0x1f24242424242424!8m2!3d46.8195505!4d-71.2410614!16s%2Fg%2F11c5r3x0r?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <address className="not-italic text-left">
                    6021 Bd Wilfrid-Hamel
                    <br />
                    L'Ancienne-Lorette, QC G2E 2H3
                    <br />
                    Canada
                  </address>
                </a>
              ) : (
                <a
                  className="text-text"
                  href="https://www.google.com/maps/place/100+Rue+de+la+Rivi%C3%A8re,+Chicoutimi,+QC+G7H+2B1/@48.425311,-71.061021,17z/data=!3m1!4b1!4m6!3m5!1s0x4b2a3d1000000001:0x1000000000000001!8m2!3d48.425311!4d-71.0584461!16s%2Fg%2F11c5r3x0r?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <address className="not-italic text-left">
                    690 Bd Talbot
                    <br />
                    Chicoutimi, QC G7H 4A9
                    <br />
                    Canada
                  </address>
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-2">Succursale</h3>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setIsQuebec(true);
                  localStorage.setItem("isQuebec", JSON.stringify(true));
                }}
                className={`px-4 py-2 border rounded ${
                  isQuebec
                    ? "bg-primary text-white"
                    : "border-primary text-primary bg-transparent"
                }`}
              >
                Québec
              </button>

              <button
                onClick={() => {
                  setIsQuebec(false);
                  localStorage.setItem("isQuebec", JSON.stringify(false));
                }}
                className={`px-4 py-2 border rounded ${
                  !isQuebec
                    ? "bg-primary text-white"
                    : "border-primary text-primary bg-transparent"
                }`}
              >
                Chicoutimi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
