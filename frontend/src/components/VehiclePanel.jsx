import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicalePanel(false);
        }}
        className="p-3  text-center absolute top-4 right-6 text-3xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setComfirmedRidePanel(true);
        }}
        className="flex p-3 w-full items-center justify-between mb-2 border-2 border-gray-300 active:border-black  rounded-xl"
      >
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
          className="h-12"
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberGo
            <span className="font-medium text-sm">
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm"> 2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable,compact rides
          </p>
        </div>

        <h2 className="text-lg font-semibold">₹199.20</h2>
      </div>

      <div
        onClick={() => {
          props.setComfirmedRidePanel(true);
        }}
        className="flex p-3 w-full items-center justify-between mb-2 border-2 border-gray-300 active:border-black  rounded-xl"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
          className="h-12"
        />
        <div className=" w-1/2 ml--2">
          <h4 className="font-medium text-base">
            Moto
            <span className="font-medium text-sm">
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm"> 3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable,Motorcycle rides
          </p>
        </div>

        <h2 className="text-lg font-semibold">₹80</h2>
      </div>
      <div
        onClick={() => {
          props.setComfirmedRidePanel(true);
        }}
        className="flex p-3 w-full items-center justify-between mb-2 border-2 border-gray-300 active:border-black  rounded-xl"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
          className="h-12"
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberAuto
            <span className="font-medium text-sm">
              <i className="ri-user-fill"></i> 3
            </span>
          </h4>
          <h5 className="font-medium text-sm"> 5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable,Auto rides
          </p>
        </div>

        <h2 className="text-lg font-semibold">₹110.25</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
