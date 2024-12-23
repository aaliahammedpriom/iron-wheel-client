import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/Provider';

const BookedServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/booked-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [user])
    console.log(services)
    if (services.length === 0) {
        return <div className="flex items-center justify-center h-screen">
            <h2 className="text-3xl text-center">
                My Booking: {services.length}
            </h2>
        </div>

    }
    return (
        <div>
            <h2 className='text-3xl text-center'>My Booking:{services.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Provider Info</th>
                                <th>Service Details</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookedServices;