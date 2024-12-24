import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/Provider';

const ServiceToDo = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/services?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, [user?.email]);

    const handleEdit = (id) => {
        // Logic for editing service
        console.log('Edit service with ID:', id);
    };

    const handleDelete = (id) => {
        // Logic for deleting service
        console.log('Delete service with ID:', id);
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-extrabold mb-8 text-center">
                Your Total Available Services: <span className="text-primary">{services.length}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service._id}
                        className="card shadow-lg bg-base-100 border border-gray-200 hover:shadow-2xl transition-all duration-300"
                    >
                        <figure className="relative">
                            <img
                                src={service.service.image}
                                alt={service.service.name}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />

                            <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-70 text-white text-xs font-medium px-3 py-1 rounded">
                                {service.serviceProvider.location}
                            </div>
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="card-title text-lg font-semibold text-gray-800">
                                {service.service.name}
                            </h2>
                            <p className="text-sm text-gray-600 mb-2">
                                {service.service.description}
                            </p>
                            <p className="text-sm">
                                <span className="font-bold">Price:</span>{' '}
                                {service.service.price.min} - {service.service.price.max}{' '}
                                {service.service.price.currency}
                            </p>
                            <p className="text-sm mb-4">
                                <span className="font-bold">Provider:</span>{' '}
                                {service.serviceProvider.name}
                            </p>
                            <div className="card-actions flex justify-end">
                                <button
                                    className="btn btn-primary btn-sm mx-1"
                                    onClick={() => handleEdit(service._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-error btn-sm mx-1"
                                    onClick={() => handleDelete(service._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceToDo;
