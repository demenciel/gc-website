import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingPage from './components/LoadingPage';
import "./App.css";
import {
  AboutMe,
  Header,
  OurServices,
  SpecialityBanner,
} from "./sections";
import { Footer, Navbar, Sidebar, PropulsedBanner } from "./components";
import logo from "./assets/logo.png";
import lady from "./assets/woman.png";
import ellipse from "./assets/ellipse.webp";
import OurSpecialities from './sections/OurSpecialities';


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingPage key="loading" />
      ) : (
        <motion.div
          key="app"
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sidebar />
          <div className="min-w-320 min-h-screen flex flex-col">
            <Navbar logo={logo} />
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Header lady={lady} ellipse={ellipse} />
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <SpecialityBanner />
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <OurSpecialities />
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <OurServices />
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <AboutMe />
            </motion.div>
            {/* <Reviews /> */}
            {/* <SubscribeEmail />  */}
            <Footer />
          </div>
          <div className="relative bottom-0 left-0 right-[calc(100%-2rem)]">
            <PropulsedBanner />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
