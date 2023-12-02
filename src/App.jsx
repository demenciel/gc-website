import { useState } from "react";
import "./App.css";
import {
  AboutMe,
  Header,
  OurServices,
  Reviews,
  SpecialityBanner,
  SubscribeEmail,
} from "./sections";
import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="min-w-320 min-h-screen -translate-y-[128px] md:-translate-y-[0px] flex flex-col">
        <Header />
        <SpecialityBanner />
        <OurServices />
        <AboutMe />
        {/* <Reviews />
        <SubscribeEmail /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
