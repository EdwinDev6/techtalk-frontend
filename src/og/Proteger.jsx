import { Navigate, } from "react-router-dom";
//import jwt from "jsonwebtoken";

export function Proteger() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  // try {
  //     // const decodedToken = jwt.verify(token, "zjm-wCIqMszTmIVjPDTLQP4LkaE"); // Reemplaza "tu_clave_secreta" con tu clave de codificación

  //   const isAdmin = decodedToken.user.roles.some((role) => role.name === "admin");
  //   if (!isAdmin) {
  //     return <Navigate to={"/login"} />;
  //   }

  //   return <Outlet />;
  // } catch (error) {
  //   console.log(error) ;
  // }
}
