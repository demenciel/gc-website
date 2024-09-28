import React from 'react'
import { Twitter } from "@mui/icons-material";


const PropulsedBanner = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className=" bg-primary text-background py-2 text-center text-sm">
            <span>Propulsé par Solutions TechnoSaas © {currentYear} </span>
            <a href="https://twitter.com/TechnoSaas" className="icon-link inline-block ml-2" target="_blank" rel="noopener noreferrer">
                <Twitter fontSize="small" className="icon-image" />
            </a>
        </div>
    )
}

export default PropulsedBanner