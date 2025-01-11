import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/StzP4Pv/1.jpg",
    title: "Welcome to IronWheel",
    description: "Experience the best quality services for all your needs.",
    buttonText: "LogIn",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/MsdgKJP/2.jpg",
    title: "Add Your Service",
    description: "Business with us for your everyday life.",
    buttonText: "All Services",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/4jWdG41/3.jpg",
    title: "Rent Your Service",
    description: "Explore services and add them.",
    buttonText: "Explore Now",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden pt-16">
      {/* Slides with framer-motion */}
      <motion.div
        className="flex transition-transform duration-1000 ease-in-out"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 1 }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`w-full h-[70vh] flex-shrink-0 relative ${
              currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } transition-all duration-1000 bg-cover ease-in-out`}
            style={{
              backgroundImage: `url(${slide.image})`,
              // backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-gray-700 transition z-10"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-gray-700 transition z-10"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-400"
            } transition transform hover:scale-150`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
