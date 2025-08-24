import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
} from "@mui/icons-material";
import React from "react";

const Sidebar = ({ isQuebec }) => {
  const facebookLink = isQuebec ? "https://www.facebook.com/profile.php?id=61579787003229&rdid=Utbve2XH3ji8bx50&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F176ogKmKTT%2F%3Ffrom_xma_click%3Dxma_e2ee%26xma_click_id%3DD0E8D8ED-546B-497D-95A7-E91EB4F6A132%26tam_xma_content_type%3D0%26is_fb_content%3Dtrue%26forward%3Dfalse%26ts%3D1756060463630%26pl%3D1" : "https://www.facebook.com/genny.sante.beaute";
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
          href="https://www.instagram.com/genny.sante.beaute/"
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
