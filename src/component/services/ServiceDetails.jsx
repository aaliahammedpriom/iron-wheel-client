import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const loadedService = useLoaderData();
  const [service, setService] = useState(loadedService);

  
  // Destructure service and serviceProvider data
  const {
    serviceProvider: { name: providerName, image: providerImage, location },
    service: {
      image: serviceImage,
      name: serviceName,
      description: serviceDescription,
      providerImage: serviceProviderImage,
      providerName: serviceProviderName,
      price: { min: priceMin, max: priceMax, currency }
    }
  } = service;

  return (
    <div className="container mx-auto p-6">
      {/* Service Provider Information */}
      <div className=" bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 shadow-xl border rounded-lg mb-8">
        <div className="card-body p-6 text-white">
          <h2 className="text-3xl font-extrabold mb-6">Service Provider Information</h2>
          <div className="flex items-center gap-6">
            <img
              src={providerImage}
              alt={providerName}
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h3 className="text-xl font-semibold">{providerName}</h3>
              <p className="text-lg">{location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Single Service Section */}
      <div className="card bg-white shadow-xl border-t-4 border-teal-500 rounded-lg">
        <div className="card-body p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Service Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Image */}
            <div className="flex justify-center items-center">
              <img
                src={serviceImage}
                alt={serviceName}
                className="w-full h-auto rounded-xl shadow-2xl transform transition duration-300 hover:scale-105"
              />
            </div>

            {/* Service Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{serviceName}</h3>
              <p className="text-lg text-gray-600 mb-6">{serviceDescription}</p>

              {/* Provider Information */}
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={serviceProviderImage}
                  alt={serviceProviderName}
                  className="w-14 h-14 rounded-full border-4 border-teal-500 shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-lg">{serviceProviderName}</h4>
                  <p className="text-sm text-gray-500">{location}</p>
                </div>
              </div>

              {/* Pricing Information */}
              <div className="text-xl font-semibold text-teal-600 mb-8">
                Price: {currency} {priceMin} - {priceMax}
              </div>

              {/* Book Now Button */}
              <Link to={`/book-services/${service._id}`} className="block text-center">
                <button className="btn btn-primary w-full py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
