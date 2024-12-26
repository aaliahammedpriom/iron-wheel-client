import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/Provider';
import { body } from 'motion/react-client';
import axios from 'axios';

const ManageServices = () => {
  const [update, setUpdate] = useState('')
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext); // Get user info from context
  const handleStatusChange = (e, _id) => {
    // console.log(e.target.value, _id)
    const data = {
      status: e.target.value
    }
    
    axios.patch(`http://localhost:3000/booked-services/${_id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // This sends cookies (e.g., JWT or session cookies) along with the request
    })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  useEffect(() => {
    axios(`http://localhost:3000/manage-todo-services`, { withCredentials: true })
      // .then((res) => res.json())
      .then((data) => {
        // Filter services where serviceProvider.email matches user.email
        const filteredServices = data.data.filter(
          (service) => service.serviceProvider.email === user.email
        );
        setServices(filteredServices);
      })

  }, [user?.email]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-extrabold mb-8 text-center">
        TO-DO Services: <span className="text-primary">{services.length}</span>
      </h2>

      {services.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No booked services found for you.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Customer Detail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  <td>
                    <p>{service.service.name}</p>
                    <p className='text-xs'>{service.serviceProvider.location}</p>
                  </td>
                  <td>
                    <p>Name: {service?.userName}</p>
                    <p>Email: {service?.userEmail}</p>
                    <p>Date: {service.serviceDate}</p>
                    <p>Instruction: {service.specialInstructions}</p>
                  </td>

                  <td>
                    {/* You can add a dropdown or action buttons here */}
                    <select
                      className="select select-bordered w-full max-w-xs"
                      defaultValue={service.serviceStatus} onChange={(e) => { handleStatusChange(e, service._id) }}
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                    <p>{service._id}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
