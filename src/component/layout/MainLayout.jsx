import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const MainLayout = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="max-w-7xl mx-auto">
            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-3 bg-primary origin-left z-50"
            />

            {/* Layout Components */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
