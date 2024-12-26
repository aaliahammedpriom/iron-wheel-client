import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 5; // Number of services per page

  // Fetch all services
  useEffect(() => {
    fetch('https://iron-wheel.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Filter services
  const filteredServices = services.filter((service) =>
    service.service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Handle page navigation
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
        />
        {searchTerm && <p>Matches: {filteredServices.length}</p>}
      </div>

      {/* Display filtered services */}
      <div>
        {currentServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* Show message if no services are found */}
      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500">
          No services found matching your search.
        </p>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <div className="btn-group">
          <button
            className="btn btn-sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            « Prev
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`btn btn-sm ${
                currentPage === page + 1 ? 'btn-active' : ''
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="btn btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
