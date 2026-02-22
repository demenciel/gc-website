import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingPage from "./components/LoadingPage";
import "./App.css";
import { AboutMe, Header, OurServices, SpecialityBanner } from "./sections";
import { Footer, Navbar, Sidebar, PropulsedBanner } from "./components";
import logo from "./assets/logonavbar.png";
import OurSpecialities from "./sections/OurSpecialities";
import Welcome from "./pages/Welcome";
import imageLeft from "./assets/blanc_logo.png";
import imageRight from "./assets/noir_logoo.png";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function App() {
  const [isQuebec, setIsQuebec] = useState(() => {
    const saved = localStorage.getItem("isQuebec");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("isQuebec", JSON.stringify(isQuebec));
  }, [isQuebec]);

  const [isWelcome, setIsWelcome] = useState(() => {
    return localStorage.getItem("isQuebec") === null;
  });

  return (
    <>
      {isWelcome ? (
        <>
          <Welcome
            imageLeft={imageLeft}
            imageRight={imageRight}
            isQuebec={isQuebec}
            setIsQuebec={setIsQuebec}
            setIsWelcome={setIsWelcome}
          />
        </>
      ) : (
        <>
          <AnimatePresence mode="wait">
            {/* {isLoading ? (
          <LoadingPage key="loading" />
        ) : ( */}
            <motion.div
              key="app"
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sidebar isQuebec={isQuebec} />
              <div className="min-w-320 min-h-screen flex flex-col snap-y snap-mandatory overflow-y-scroll">
                <Navbar logo={logo} />
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="snap-start h-screen"
                >
                  <Header />
                </motion.div>
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="snap-start h-screen"
                >
                  <SpecialityBanner />
                </motion.div>
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="snap-start h-screen"
                >
                  <OurSpecialities />
                </motion.div>
                {/* <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <OurServices />
                </motion.div> */}
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="snap-start h-screen"
                >
                  <AboutMe />
                </motion.div>
                {/* <Reviews /> */}
                {/* <SubscribeEmail />  */}
                <Footer isQuebec={isQuebec} setIsQuebec={setIsQuebec} />
              </div>
            </motion.div>
            {/*   )} */}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
