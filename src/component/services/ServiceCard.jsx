import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {
    serviceProvider: { name: providerName, image: providerImage, location },
    service: {
      image: serviceImage,
      name: serviceName,
      description,
      price: { min, max, currency },
      
    },
  _id,} = service;

  return (
    <div className=" w-full bg-base-100 shadow-xl mb-4">
      {/* Service Image */}
      <figure>
        <img src={serviceImage} alt={serviceName} className="w-full h-40 object-cover" />
      </figure>

      {/* Service Details */}
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{serviceName}</h2>
        <p className="text-gray-600">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>
        <p className="text-lg font-semibold">
          Price: {min} - {max} {currency}
        </p>

        {/* Service Provider */}
        <div className="flex items-center mt-4 gap-4">
          <img
            src={providerImage}
            alt={providerName}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-medium text-base">{providerName}</p>
            <p className="text-sm text-gray-500">Area: {location}</p>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/services/${_id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;