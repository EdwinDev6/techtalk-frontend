import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";
import axios from 'axios'

const Signup = () => {
  const [data, setData] = useState({
    username: "",
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:4000/api/auth/signup";
        const {data:res} = await axios.post(url,data);
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
    <div className={styles.Signup_container}>
      <div className={styles.Signup_form_container}>
        <div className={styles.left}>
          <h1> Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Log In
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1> Create Account</h1>
          <input
            type="Text"
            placeholder="UserName"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
            className={styles.input}
          />

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
            Sign Up

          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
