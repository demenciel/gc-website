import React from "react";
import logo from "../assets/nouveau-logo.png";
import {
  EmailOutlined,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div id="footer" className="relative w-full bg-background text-primary border-t-2 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain mb-4" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-start text-left mb-2">
              <EmailOutlined className="mr-2" />
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <div className="flex items-center mb-2">
              <a href="mailto:gennysantebeaute@gmail.com" className="hover:text-primary">
                <span>gennysantebeaute@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center  mb-4">
              <LocationOn className="mr-2" />
              <h3 className="text-xl font-bold">Adresse</h3>
            </div>
            <div className="flex items-center">
              <a href="https://www.google.com/maps/place/6021+Bd+Wilfrid-Hamel,+L'Ancienne-Lorette,+QC+G2E+2H3/@46.8195505,-71.2436363,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb883834e666667:0x1f24242424242424!8m2!3d46.8195505!4d-71.2410614!16s%2Fg%2F11c5r3x0r?entry=ttu" target="_blank" rel="noopener noreferrer">
                <address className="not-italic text-left">
                  6021 Bd Wilfrid-Hamel<br />
                  L'Ancienne-Lorette, QC G2E 2H3<br />
                  Canada
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
