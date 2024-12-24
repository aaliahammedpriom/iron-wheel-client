import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/Provider';

const ManageServices = () => {
    const [services, setServices]= useState([]);
    const {user}= useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:3000/services?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> {
            setServices(data)
        })
    },[user?.email])
    return (
        <div>
           <h2>Your Total Available Service :{services.length}</h2>
        </div>
    );
};

export default ManageServices;