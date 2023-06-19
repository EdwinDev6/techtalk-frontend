import { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("")
  const navigate= useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:4000/api/auth/signup";
        const {data:res} = await axios.post(url,data);
        navigate("/login")
        console.log(res.message)
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

          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Log In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
