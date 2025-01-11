import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import AuthContext from '../../provider/Provider';

const MainLayout = () => {
    const { toggle } = useContext(AuthContext);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div
            className="  "
            data-theme={toggle ? "dark" : "light"}
        >

            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-3 bg-primary origin-left z-50"
            />

            {/* Layout Components */}
            <Navbar />
            <div className='px-5'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
