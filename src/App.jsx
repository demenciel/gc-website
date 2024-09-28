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
import logo from "./assets/Photos site genny/logo-transparent-primary.png";
import lady from "./assets/beautiful-woman.webp";
import ellipse from "./assets/ellipse.webp";

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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time as needed

    return () => clearTimeout(timer);
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
          <Navbar logo={logo} />
          <Sidebar />
          <div className="min-w-320 min-h-screen md:-translate-y-0 z-0 flex flex-col">
            <Header lady={lady} ellipse={ellipse} />
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
          <div className="sticky bottom-0 left-0 right-[calc(100%-2rem)]">
            <PropulsedBanner />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
