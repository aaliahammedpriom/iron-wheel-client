import React, { useContext, useState } from 'react';
import AuthContext from '../../provider/Provider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const [currency, setCurrency] = useState('');
    const navigate = useNavigate()

    const handleAddService = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        const newService = {
            "serviceProvider": {
                "name": initialData.providerName,  // providerName from form
                "email": initialData.email,  // email from form
                "image": initialData.providerImage,  // providerImage from form
                "location": initialData.location  // location from form
            },
            "service": {
                "image": initialData.image,  // image from form
                "name": initialData.name,  // name from form
                "description": initialData.description,  // description from form
                "providerImage": initialData.providerImage,  // providerImage from form
                "providerName": initialData.providerName,  // providerName from form
                "price": {
                    "min": initialData.min,  // min from form
                    "max": initialData.max,  // max from form
                    "currency": initialData.currency  // currency from form
                }
            }
        };

        // console.log(newService)

        axios.post('https://iron-wheel.vercel.app/services', newService, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true 
        })
        .then(response => {
            // console.log(response.data);
            navigate('/manage-services'); 
        })


    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg p-8 pt-24">
            <h1 className="text-3xl font-bold text-center mb-6">Add a New Service</h1>
            <form onSubmit={handleAddService}>
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
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-medium">Currency</span>
                            </label>
                            <select
                                value={currency}
                                onChange={(e) => { setCurrency(e.target.value); }}
                                className="select select-bordered"
                                name="currency"
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
                                required
                                maxLength="100"
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
                    <button className="btn btn-primary w-full max-w-xs">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
