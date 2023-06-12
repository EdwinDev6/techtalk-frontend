import { Navigate, Outlet } from "react-router-dom";


export function Proteger() {
  const token = localStorage.getItem("token");
  

  if (!token ) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}

