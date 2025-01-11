import React, { useContext, useState } from 'react';
import AuthContext from '../../provider/Provider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddService = () => {
    const loadedService = useLoaderData();
    // console.log(loadedService)
    const { user } = useContext(AuthContext);
    const [currency, setCurrency] = useState('');
    const navigate = useNavigate()

    const handleUpdateService = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        const updateService = {
            "name": initialData.providerName,
            "email": initialData.email,
            "image": initialData.providerImage,
            "location": initialData.location,
            "image": initialData.image,
            "name": initialData.name,
            "description": initialData.description,
            "providerImage": initialData.providerImage,
            "providerName": initialData.providerName,
            "min": initialData.min,
            "max": initialData.max,
            "currency": initialData.currency
        };

        axios.put(`https://iron-wheel.vercel.app/services/${loadedService._id}`, updateService, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Ensures cookies (e.g., session or JWT tokens) are sent with the request
        })
            .then(response => {
                if (response.data.acknowledged) {
                    navigate('/manage-services'); // Navigate to the manage services page if the update is acknowledged
                }
            })




    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg p-8 pt-24">
            <h1 className="text-3xl font-bold text-center mb-6">Update Service</h1>
            <form onSubmit={handleUpdateService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service Info Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Service Info</h2>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Service Image URL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Image URL"
                                className="input input-bordered"
                                name="image"
                                defaultValue={loadedService.service.image}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Service Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Service Name"
                                className="input input-bordered"
                                name="name"
                                defaultValue={loadedService.service.name}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Min. Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Min. Price"
                                className="input input-bordered"
                                name="min"
                                defaultValue={loadedService.service.price.min}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Max. Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Max. Price"
                                className="input input-bordered"
                                name="max"
                                defaultValue={loadedService.service.price.max}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Currency</span>
                            </label>
                            <select
                                onChange={(e) => { setCurrency(e.target.value); }}
                                className="select select-bordered"
                                name="currency"
                                defaultValue={loadedService.service.price.currency}
                                required
                            >
                                <option value="" disabled selected>Select Currency</option>
                                <option value="BDT">BDT</option>
                                <option value="USDT">USDT</option>
                                <option value="INR">INR</option>
                                <option value="ETC">ETC</option>
                            </select>
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Service Area</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Service Area"
                                className="input input-bordered"
                                name="location"
                                defaultValue={loadedService.serviceProvider.location}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Service Description</span>
                            </label>
                            <textarea
                                placeholder="Service Description"
                                className="textarea textarea-bordered"
                                rows="4"
                                name="description"
                                defaultValue={loadedService.service.description}
                                maxLength="100"
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Provider Info Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Provider Info</h2>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Provider Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Provider Name"
                                className="input input-bordered"
                                value={user?.displayName}
                                readOnly
                                name="providerName"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Provider Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                value={user?.email}
                                readOnly
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Provider Image URL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Image URL"
                                className="input input-bordered"
                                value={user?.photoURL}
                                readOnly
                                name="providerImage"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <button className="btn btn-primary w-full max-w-xs">Update</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
