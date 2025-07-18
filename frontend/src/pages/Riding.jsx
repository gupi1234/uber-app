import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          src="https://i2-prod.mylondon.news//article16106961.ece/ALTERNATES/s1200d/2_Uber-pink-cars.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
            className="h-20"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Gupi</h2>
            <h4 className="text-xl font-bold -mt-1 -mb-1">WB07 GD 1601</h4>
            <h5 className="text-sm text-gray-600 ">Mahindra Thar</h5>
          </div>
        </div>
        <div className="flex gap-5 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className=" text-lg ri-map-pin-range-line"></i>
              <div>
                <h3 className="text-lg font-medium">858/12-R</h3>
                <p className="text-base -mt-1 text-gray-600">
                  Nabadwip Dham , west-Bengal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
              <i className="text-lg ri-cash-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹199.20</h3>
                <p className="text-base -mt-1 text-gray-600">Payment Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full  bg-green-600 text-white font-semibold p-2 rounded-lg mt-5">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
