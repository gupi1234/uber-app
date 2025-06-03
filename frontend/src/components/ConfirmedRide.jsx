import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setComfirmedRidePanel(false);
        }}
        className="p-3  text-center absolute top-4 right-6 text-3xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirmed Your Ride </h3>
      <div className="flex gap-5 justify-between flex-col items-center">
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
          className="h-20"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">858/12-R</h3>
              <p className="text-base -mt-1 text-gray-600">
                Nabadwip Dham , west-Bengal
              </p>
            </div>
          </div>
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
        <button
          onClick={() => {
            props.setVehicleFound(true);
          }}
          className="w-full mt-5 bg-green-600 text-xl text-white font-semibold p-2 rounded-lg"
        >
          Comfirmed
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
