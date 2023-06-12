import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouteGuard = ({ role }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/api/auth/whoami')
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    console.log('user private', user);

    if (!error && user && user.roles.includes(role)) {
        return <Outlet />;
    }
    
    return <Navigate to="/Homeuser" replace />;
};

export default PrivateRouteGuard;
