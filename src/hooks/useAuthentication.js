import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const LoginUrl = process.env.REACT_APP_API_LOGIN;
  const authenticate = async (data) => {
    try {
      const url = LoginUrl;
      const { data: res } = await axios.post(url, data);
      const roles = res?.roles;
      const token = res?.token;
      setAuth({ roles, token });
     
      if (roles === "admin") {
        navigate("/");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        return error.response.data.message;
      }
    }
  };

  return { authenticate };
};

export default useAuthentication;
