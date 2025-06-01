import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
              Password
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
          <div className="space-y-4 ">
            {/* Vehicle Data Inputs */}
            <label className="text-lg font-medium text-gray-800 block mb-2">
              Vehicle Details
            </label>
            <div className="flex  gap-3">
              <input
                required
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Vehicle color"
                className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* Vehicle type options are already provided above as "car", "auto", and "moto" in the select input. No additional code needed here. */}

              <input
                required
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="Plate number"
                className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <input
              required
              type="number"
              min="1"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Capacity"
              className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="" disabled>
                Select vehicle type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
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
            Create Captain Account
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
