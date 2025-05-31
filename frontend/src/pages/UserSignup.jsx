import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
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
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt="Uber Logo"
          className="w-24 mb-8"
        />

        {/* Form */}
        <form onSubmit={submitHandler} className="w-full space-y-5">
          {/* Name Input */}
          <div>
            <label className="text-lg font-medium text-gray-800 block mb-2">
              What's your name
            </label>
            <div className="flex gap-3">
              <input
                required
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                required
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-lg font-medium  text-gray-800 block mb-2">
              What's your email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-lg  font-medium text-gray-800 block mb-2">
              Enter password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-all"
          >
            Sign up
          </button>
        </form>

        {/* Already Have Account */}
        <p className="mt-6 text-center text-md text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 text-blue-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>

      {/* Privacy Policy Section */}
      <div className="mt-8 text-center text-xs text-gray-500 px-4">
        <p>
          By signing up, you agree to our{" "}
          <Link
            to="/privacy-policy"
            className="text-blue-600 font-semibold hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            to="/terms-of-service"
            className="text-blue-600 font-semibold hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
