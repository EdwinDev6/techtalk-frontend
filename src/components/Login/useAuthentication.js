import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const useAuthentication = () => {
  const { setAuth, } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const authenticate = async (data) => {
    try {
      const url = "http://localhost:4000/api/auth/signin";
      const { data: res } = await axios.post(url, data);
      const roles = res?.roles;
      const token = res?.token;
      setAuth({ roles, token });


      
      navigate(from, { replace: true });
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