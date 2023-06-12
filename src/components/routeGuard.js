import { Outlet, Navigate } from 'react-router-dom';
import { useState,useEffect } from 'react';


const PrivateRouteGuard = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4000/api/auth/signin').then((user) => {
      setUser(user)
    }).catch(()=>{
      setError(true)
    })
  }, [])

  console.log('user private', user);

  if (!error) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default PrivateRouteGuard;