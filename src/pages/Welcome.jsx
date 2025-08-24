import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = ({ imageLeft, imageRight, isQuebec, setIsQuebec, setIsWelcome }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the screen is mobile size
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Hide intro after 2.5 seconds total (fade in + display + fade out)
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showIntro ? (
                // INTRO OVERLAY
                <motion.div
                    key="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 flex items-center justify-center bg-background2 z-50"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="px-6 py-4"
                    >
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
                            Bienvenue chez <br /> Genny Santé Beauté
                        </h1>
                        <h3 className="text-lg text-center text-gray-500 mt-4" >
                            Maintenant avec deux succursales pour mieux vous servir !
                        </h3>
                    </motion.div>
                </motion.div>
            ) : (
                // MAIN WELCOME CONTENT
                isQuebec !== null && (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="welcome flex flex-col md:flex-row w-full h-screen"
                    >
                        {/* Left Section */}
                        <div className="relative flex w-full md:w-1/2 h-1/2 md:h-full">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    filter: isMobile ? "blur(0px)" : "blur(10px)",
                                    scale: 1.05,
                                }}
                                animate={{
                                    opacity: 1,
                                    filter: isMobile ? "blur(0px)" : "blur(4px)",
                                    scale: 1,
                                }}
                                whileHover={
                                    isMobile
                                        ? {}
                                        : { scale: 1.05, filter: "blur(0px)" }
                                }
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                src={imageLeft}
                                alt="left"
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => {
                                    setIsQuebec(true);
                                    setIsWelcome(false);
                                }}
                            />
                        </div>

                        {/* Right Section */}
                        <div className="relative flex w-full md:w-1/2 h-1/2 md:h-full">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    filter: isMobile ? "blur(0px)" : "blur(10px)",
                                    scale: 1.05,
                                }}
                                animate={{
                                    opacity: 1,
                                    filter: isMobile ? "blur(0px)" : "blur(4px)",
                                    scale: 1,
                                }}
                                whileHover={
                                    isMobile
                                        ? {}
                                        : { scale: 1.05, filter: "blur(0px)" }
                                }
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                src={imageRight}
                                alt="right"
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => {
                                    setIsQuebec(false);
                                    setIsWelcome(false);
                                }}
                            />
                        </div>
                    </motion.div>
                )
            )}
        </AnimatePresence>
    );
};

export default Welcome;