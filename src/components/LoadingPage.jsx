import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const LoadingPage = () => {
    return (
        <motion.div
            className="loading-container"
            initial={{ opacity: 1, background: "linear-gradient(45deg, #ffd0d7 0%, #f6e5e5 99%, #f6e5e5 100%)" }}
            animate={{
                opacity: 0,
                background: [
                    "linear-gradient(45deg, #ffd0d7 0%, #f6e5e5 99%, #f6e5e5 100%)",
                    "linear-gradient(45deg, #242424 0%, #ffd0d7 100%)",
                    "linear-gradient(45deg, #f6e5e5 0%, #ffd0d7 100%)",
                    "linear-gradient(45deg, #ffd0d7 0%, #f6e5e5 99%, #f6e5e5 100%)",
                ],
            }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        >
            <motion.div
                className="loading-spinner"
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