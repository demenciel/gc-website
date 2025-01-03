import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const LoadingPage = () => {
    return (
        <motion.div
            className="loading-container"
            initial={{ opacity: 1, background: "linear-gradient(45deg, #F0BB78 0%, #FFF0DC 99%, #FFF0DC 100%)" }}
            animate={{
                opacity: 0,
                background: [
                    "linear-gradient(45deg, #F0BB78 0%, #FFF0DC 99%, #FFF0DC 100%)",
                    "linear-gradient(45deg, #543A14 0%, #F0BB78 100%)",
                    "linear-gradient(45deg, #FFF0DC 0%, #F0BB78 100%)",
                    "linear-gradient(45deg, #F0BB78 0%, #FFF0DC 99%, #FFF0DC 100%)",
                ],
            }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        >
            <motion.div
                className="loading-spinner"
                color='#F0BB78'
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Chargement...
            </motion.h2>
        </motion.div>
    );
};

export default LoadingPage;