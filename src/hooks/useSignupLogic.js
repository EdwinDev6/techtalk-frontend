import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const useSignupLogic = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { setAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const SignupUrl = process.env.REACT_APP_API_SIGNUP;
  const from = location.state?.from?.pathname || "/login";

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = SignupUrl;
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
        setError(error.response.data.message);
      }
    }
  };

  return {
    data,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useSignupLogic;
