import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt=""
          className="w-20 ml-4"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h1 className="text-3xl font-bold">Get Started With Ubar</h1>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
