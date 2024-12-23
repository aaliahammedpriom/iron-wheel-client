import React, { useContext } from 'react';
import AuthContext from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../component/common/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location)
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/signin'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;