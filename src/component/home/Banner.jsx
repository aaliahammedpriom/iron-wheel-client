// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/N9sR04B/logo2.webp",
    title: "Welcome to IronWheel",
    description: "Experience the best quality servicess all your needs.",
    buttonText: "LogIn",
  },
  {
    id: 2,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2MStZI-XS7RUf5ilgCb4s3Iw1irIy1hyphenhyphenyTyLdbsOBEpTBVidyxFkzNF-w_fJCVVDwHGBO-jWpFQzhjK5DebCXZqlalv3KVYEnNROl-8X3pMb5w39zOIL-91fsT96tXSaltUiYc6uOO5Y/s1600/movie-time-hey-im-with-the-band-blog.png",
    title: "Add Your Service",
    description: "Business with Us your everyday life.",
    buttonText: "All Servicess",
  },
  {
    id: 3,
    image: "https://preview.redd.it/if-i-could-only-see-maybe-4-or-5-of-these-movies-before-the-v0-mbjrdiz7129c1.jpeg?width=1080&crop=smart&auto=webp&s=f150215e486493e125720fa34d56c8e4aeb237b3",
    title: "Rent Your Service",
    description: "Explore Service and add them.",
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
    <div className="relative w-full md:h-screen overflow-hidden bg-gray-900">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-screen flex-shrink-0 relative ${
              currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } transition-all duration-1000 ease-in-out`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center font-serif text-center text-[#f2f0e6] p-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-md md:text-lg lg:text-xl mb-6 animate-fadeIn delay-200">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

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
