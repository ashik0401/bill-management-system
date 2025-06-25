import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <span className="loading loading-ring loading-xl "></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname}
        to="/auth/login" />;
};

export default PrivateRoute;
