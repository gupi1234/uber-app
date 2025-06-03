import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-1 text-center absolute w-[93%] top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
