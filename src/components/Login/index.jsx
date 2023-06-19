import { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from 'axios'

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("")

  const { setAuth } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:4000/api/auth/signin";
        const {data:res} = await axios.post(url, data);
        const roles = res?.roles
        const token = res?.token
        setAuth({roles, token})
        navigate(from, {replace: true})
      
    } catch (error) {
        if(error.response &&
            error.response.status >=400 &&
            error.response.status <=500
            ){
                setError(error.response.data.message)
            }
        
    }

  }

  return (
    <div className="w-full">
      <div className={styles.login_form_container}>
        <div className={styles.left}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1> Login to Your Account</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className={styles.input}
          />
          {error && <div className={styles.error_msg}> {error}</div>}
          <button type="submit" className={styles.green_btn}>
            Sign in

          </button>
        </form>
        <div >
      <h1> New Here?</h1>
            <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full'>
              Sign Up
            </button>
          
      </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default Signin;