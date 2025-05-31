import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainDate, setCaptainDate] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainDate({
      email: email,
      password: password,
    });
    console.log(captainDate);

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
