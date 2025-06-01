import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    e;

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col h-screen justify-between bg-[#f5f5f5] text-[#111827]">
      <div>
        <img
          src="https://w7.pngwing.com/pngs/597/568/png-transparent-uber-gratuity-lyft-driving-taxi-driving-driving-logo-car.png"
          alt="Uber Captain"
          className="w-20 mb-6"
        />
        <form onSubmit={(e) => submitHandler(e)} className="w-full">
          <h3 className="text-lg mb-2 font-semibold">What's Your Email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-white mb-6 rounded-lg p-3 w-full border border-gray-300 text-base placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
            className="bg-white mb-6 rounded-lg p-3 w-full border border-gray-300 text-base placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-[#111827] mb-6 text-white text-lg w-full py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-semibold shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 text-md">
          Become a Captain?
          <span className="text-yellow-500 font-semibold ml-1">
            <Link to="/captain-signup">Register as a Captain</Link>
          </span>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center mb-3 bg-yellow-500 text-[#111827] font-sans text-lg w-full py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 font-semibold shadow-sm"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
