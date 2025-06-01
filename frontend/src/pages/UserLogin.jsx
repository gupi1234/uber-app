import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-black px-6 py-8 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt="Uber Logo"
          className="w-24 mb-10"
        />

        {/* Login Form */}
        <form onSubmit={submitHandler} className="space-y-6">
          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What's your email
            </h3>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-base placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Enter password
            </h3>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-base placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-base font-semibold hover:bg-gray-900 transition-all"
          >
            Login
          </button>
        </form>

        {/* Signup Prompt */}
        <p className="mt-6 text-center text-md text-gray-600">
          Don't have an account?
          <Link
            to="/signup"
            className="ml-1 text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Sign in as Captain */}
      <div className="mt-10">
        <Link
          to="/captain-login"
          className="flex items-center justify-center w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
