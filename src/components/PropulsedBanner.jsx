import React from 'react'
import { Language } from "@mui/icons-material";


const PropulsedBanner = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=" bg-primary text-background py-2 text-center text-sm">
            <span className="text-text">Propulsé par Solutions TechnoSaas © {currentYear} </span>
            <a href="https://techno-saas.com" className="icon-link inline-block ml-2 text-black" target="_blank" rel="noopener noreferrer">
                <Language fontSize="small" className="icon-image text-text" />
            </a>
        </div>
    )
}

export default PropulsedBanner