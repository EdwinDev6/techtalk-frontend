import React from "react";
import { useState } from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black dark:bg-gray-900">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="mb-1 text-xs tracking-wide text-gray-600">UserName:</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  id="username"
                  type="text"
                  name="username"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your Username" onChange={handleChange}
                  value={data.username}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"  onChange={handleChange}
                  value={data.email}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your password" onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>
            </div>

            <div className="flex w-full">
            {error && <div className="w-370 px-15 py-15 my-5 text-14 bg-red-500 text-white rounded-5 text-center"> {error}</div>}
              <button
                type="submit"
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
                
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a href="/login" target="_blank" className="inline-flex items-center text-white font-medium text-xs text-center">
          <span className="ml-2">You have an account? <a href="/login" className="text-xs ml-2 text-blue-500 font-semibold">Login here</a></span>
        </a>
      </div>
    </div>
  );
};

export default Signup;
