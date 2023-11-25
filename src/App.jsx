import { useState } from "react";
import "./App.css";
import {
  AboutMe,
  Header,
  OurServices,
  SpecialOffers,
  SpecialityBanner,
  SubscribeEmail,
} from "./sections";
import { Footer, Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-w-320 min-h-screen flex flex-col">
        <Header />
        <SpecialityBanner />
        <OurServices />
        <AboutMe />
        <SpecialOffers />
        <SubscribeEmail />
        <Footer />
      </div>
    </>
  );
}

export default App;
