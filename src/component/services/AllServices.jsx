import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  

  // Fetch all services
  useEffect(() => {
    fetch('http://localhost:3000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Filter services
  const filteredServices = services.filter((service) =>
    service.service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="p-5">
      <h2 className="text-2xl font-extrabold mb-8 text-center">
        All Available Services: {services.length}
      </h2>

      {/* Search Input */}
      <div className="mb-5 flex gap-5 justify-center items-center">
        <input
          type="text"
          placeholder="Search for a service..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        {
            searchTerm && <p>Match:{filteredServices.length} </p>
        }
      </div>

      {/* Display filtered services */}
      <div className="">
        {filteredServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* Show message if no services are found */}
      {services.length === 0 && (
        <p className="text-center text-gray-500">No services found matching your search.</p>
      )}
    </div>
  );
};

export default AllServices;
