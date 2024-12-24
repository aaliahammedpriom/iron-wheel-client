import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/Provider';

const BookedServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch(`http://localhost:3000/booked-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, [user]);

    if (services.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-3xl text-center">
                    My Booking: {services.length}
                </h2>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl text-center">My Booking: {services.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>Provider Info</th>
                            <th>Service Details</th>
                            <th>Price</th>
                            <th>Your Instructions</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service._id}>
                                {/* Provider Info */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={service.service?.providerImage}
                                                    alt="Provider"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {service.service?.providerName}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {service?.userName}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* Service Details */}
                                <td>
                                    {service.service?.name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {service.service?.description}
                                    </span>
                                </td>

                                {/* Price */}
                                <td>
                                    {service.service?.price.currency} {service.service?.price.min} - {service.service?.price.max}
                                </td>
                                {/* Price */}
                                <td>
                                    <p>{service?.specialInstructions}</p>
                                    <p>Date:{service?.serviceDate}</p>
                                </td>

                                {/* Status */}
                                <td>
                                    <button className="btn btn-ghost btn-xs">
                                        {service.serviceStatus}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedServices;
