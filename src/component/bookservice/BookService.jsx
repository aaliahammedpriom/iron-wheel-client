import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AuthContext from '../../provider/Provider';

const BookService = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const loadedService = useLoaderData();
  const [service, setService] = useState(loadedService);
  const [serviceDate, setServiceDate] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Destructuring service and serviceProvider data
  const {
    _id: serviceId,
    serviceProvider: { name: providerName, email: providerEmail, image: providerImage, location },
    service: {
      image: serviceImage,
      name: serviceName,
      description: serviceDescription,
      providerImage: serviceProviderImage,
      providerName: serviceProviderName,
      price: { min: priceMin, max: priceMax, currency }
    }
  } = service;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    const bookedService = {
      serviceId,
      userEmail: user?.email,
      userName: user?.displayName,
      serviceDate,
      serviceStatus: 'Panding',
      specialInstructions,

    }
    
   fetch(`http://localhost:3000/booked-services`,{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(bookedService)
   })
   .then(res=> res.json())
   .then(data=>{
    if(data.acknowledged){
      navigate('/booked-services')
    }
   })
    // console.log(bookedService)
    // console.log({
    //   serviceId,
    //   serviceName,
    //   serviceImage,
    //   providerEmail,
    //   providerName,
    //   userEmail: user?.email,
    //   userName: user?.displayName,
    //   serviceDate,
    //   serviceStatus: 'Panding',
    //   specialInstructions,
    //   price: `${priceMin} - ${priceMax} ${currency}`,
    // });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Book Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Non-editable fields */}
        <div className="form-control">
          <label className="label">Service ID</label>
          <input type="text" value={serviceId} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">Service Name</label>
          <input type="text" value={serviceName} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">Service Image</label>
          <img src={serviceImage} alt={serviceName} className="w-full h-48 object-cover rounded-md" />
        </div>
        <div className="form-control">
          <label className="label">Provider Email</label>
          <input type="email" value={providerEmail} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">Provider Name</label>
          <input type="text" value={providerName} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">Current User Email</label>
          <input type="email" value={user?.email} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">Current User Name</label>
          <input type="text" value={user?.displayName} readOnly className="input input-bordered" />
        </div>

        {/* Editable fields */}
        <div className="form-control">
          <label className="label">Service Taking Date</label>
          <input
            type="date"
            value={serviceDate}
            onChange={(e) => setServiceDate(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">Special Instructions</label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="Address, area, customized service plan..."
            className="textarea textarea-bordered"
            required
          />
        </div>

        {/* Price */}
        <div className="form-control">
          <label className="label">Price</label>
          <input
            type="text"
            value={`${priceMin} - ${priceMax} ${currency}`}
            readOnly
            className="input input-bordered"
          />
        </div>

        {/* Purchase Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Purchase Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
