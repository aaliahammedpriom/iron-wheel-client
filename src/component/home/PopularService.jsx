import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../services/ServiceCard';

const PopularService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://iron-wheel.vercel.app/services`)
      .then(res => res.json())
      .then(data => {
        // Shuffle the services array and pick 6 random ones
        const shuffledServices = data.sort(() => Math.random() - 0.5);
        setServices(shuffledServices.slice(0, 6));
      });
  }, []);

  return (
    <div className="my-8">
      <motion.h2
        className="text-3xl font-bold text-center text-primary mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Popular Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-5">
        {services.map((service) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center m-8">
        <Link
          to={'/services'}
          className="btn btn-primary text-3xl font-bold mb-6"
        >
          Show All Services
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
