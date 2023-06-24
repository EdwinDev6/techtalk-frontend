import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiresAuth = ( {allowedRoles } ) => {
    const { auth }= useAuth()
    const location = useLocation()
    
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role.name)) ? <Outlet /> : <Navigate to={"/homeuser"} state={{from: location}} replace/> 
    )
}

export default RequiresAuth