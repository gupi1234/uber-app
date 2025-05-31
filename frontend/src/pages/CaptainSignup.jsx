import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col justify-between text-black">
      {/* Header & Form */}
      <div>
        {/* Uber Logo */}
        <img
          src="https://w7.pngwing.com/pngs/597/568/png-transparent-uber-gratuity-lyft-driving-taxi-driving-driving-logo-car.png"
          alt="Uber Captain"
          className="w-20 mb-6"
        />

        {/* Form */}
        <form onSubmit={submitHandler} className="w-full space-y-5">
          {/* Name Input */}
          <div>
            <label className="text-lg font-medium text-gray-800 block mb-2">
              What's ou Captains Name
            </label>
            <div className="flex gap-3">
              <input
                required
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-lg font-medium text-gray-800 block mb-2">
              What's our Captains Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-white  rounded-lg p-3 w-full border border-gray-300 text-base placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-lg font-medium text-gray-800 block mb-2">
              Enter Password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Password"
              className="bg-white mb-6 rounded-lg p-3 w-full border border-gray-300 text-base placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full 
              text-lg 
              py-3 
              rounded-md 
              font-semibold 
              text-gray-900
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
              hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700
              transition-all
              shadow-md
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
            "
          >
            Sign up
          </button>
        </form>

        {/* Already Have Account */}
        <p className="mt-6 text-center text-md text-gray-600">
          Already have an account?
          <Link
            to="/captain-login"
            className="text-yellow-500 font-semibold ml-1"
          >
            Login
          </Link>
        </p>
      </div>

      {/* Privacy Policy Section */}
      <div className="mt-8 text-center text-xs text-gray-500 px-4">
        <p>
          By signing up, you agree to our{" "}
          <Link
            to="/privacy-policy"
            className="text-yellow-500 font-semibold hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            to="/terms-of-service"
            className="text-yellow-500 font-semibold hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
