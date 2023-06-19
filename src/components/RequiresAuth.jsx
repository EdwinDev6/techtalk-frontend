import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequiresAuth() {
    const auth = useAuth()
    const location = useLocation()
    console.log(auth)
    return (
        auth?.roles ? <Outlet /> : <Navigate to={"/login"} state={{from: location}} replace/> 
    )
}

export default RequiresAuth