import React from "react";
import cryo from "../assets/photo thermocryothérapie.jpg";

const Header = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image: absolute to fill the container */}
      <img
        src={cryo}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-0" />

      {/* Text block with a "frosted glass" look using backdrop-blur */}
      <div className="z-10 max-w-2xl absolute top-1/2 left-[5%] transform -translate-y-1/2 p-6 sm:p-8 text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md">
          Habitez le corps qui vous correspond
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Des soins spécialisés pour sculpter et améliorer votre silhouette.
        </p>
      </div>
    </div>
  );
};

export default Header;
