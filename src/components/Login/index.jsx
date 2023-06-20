import React, { useState } from "react";
import axios from "axios";
import styles from "./index.css";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth/signin";
      const { data: res } = await axios.post(url, data);
      console.log(res)
      localStorage.setItem("token", res.token);

      //window.location = "/homeuser";
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

  return (
    <div>
      
      <div className="background"></div>
      <div className="container">
        <div className="item">
          <h2 className="logo">
            <i className="bx bxl-xing"></i>TechTalk
          </h2>
          <div className="text-item">
            <h2>
              Welcome! <br />
              <span>To Techtalk News</span>
            </h2>
            <p>
            TechTalk is a news-based social network specifically designed 
            for the technology community. It provides a space where technology 
            enthusiasts, industry professionals, and enthusiasts can connect, share, 
            and discuss the latest news and advancements in the world of technology.
            </p>
          </div>
        </div>
        <div className="login-section">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-envelope"></i>
                </span>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
                <label>Password</label>
              </div>
              <div className="remember-password">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  Remember Me
                </label>
                <a href="/">Forget Password</a>
              </div>
              {error && <div className={styles.error_msg}>{error}</div>}
              <button className="btn">Login In</button>
              <div className="create-account">
                <p>
                  Create A New Account?{" "}
                  <a href="/signup" className="register-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="form-box register">
            <form>
              <h2>Sign Up</h2>
              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-user"></i>
                </span>
                <input type="text" required />
                <label>Username</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-envelope"></i>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-lock-alt"></i>
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-password">
                <label htmlFor="agree">
                  <input type="checkbox" id="agree" />
                  I agree with this statement
                </label>
              </div>
              <button className="btn">Sign Up</button>
              <div className="create-account">
                <p>
                  Already Have An Account?{" "}
                  <a href="/signin" className="login-link">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;