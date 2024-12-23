import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [ services , setServices]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/services`)
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className=''>
            <h2>All Availeable Services : {services.length}</h2>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;