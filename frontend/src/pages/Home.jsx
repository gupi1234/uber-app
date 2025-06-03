import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehicalePanel, setVehicalePanel] = useState(false);
  const [confirmedRidePanel, setComfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicalePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  confirmedRidePanel;

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: "74%", padding: 24 });

      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0% ",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: "74%", padding: 24 });

      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0% ",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehicalePanel) {
      gsap.to(vehicalePanelRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(vehicalePanelRef.current, { transform: "translateY(100%)" });
    }
  }, [vehicalePanel]);

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(confirmedRidePanelRef.current, { transform: "translateY(100%)" });
    }
  }, [confirmedRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(vehicleFoundRef.current, { transform: "translateY(100%)" });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(waitingForDriverRef.current, { transform: "translateY(100%)" });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
        alt="Uber Logo"
        className="w-18 absolute left-5 top-5"
      />

      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          src="https://i2-prod.mylondon.news//article16106961.ece/ALTERNATES/s1200d/2_Uber-pink-cars.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
          <div className="h-[26%] p-6 bg-white relative ">
            <h5
              ref={panelCloseRef}
              onClick={() => {
                setPanelOpen(false);
              }}
              className="absolute top-6 right-6  opacity-0 text-2xl"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a Trip</h4>
            <form onSubmit={submitHandler} className="relative pt-2">
              <div className="line absolute h-16 w-1 top-[40%] left-6 bg-gray-500  rounded-full "></div>
              {/* Pickup Input */}
              <div className="relative z-10">
                <input
                  onClick={() => setPanelOpen(true)}
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Add a pick-up location"
                  className="w-full pl-12 pr-4 py-3 text-base rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black mb-3"
                />
                <i className="ri-map-pin-line absolute left-4 top-3.5 text-xl text-gray-500" />
              </div>

              {/* Destination Input */}
              <div className="relative z-10">
                <input
                  onClick={() => setPanelOpen(true)}
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter your destination"
                  className="w-full pl-12 pr-4 py-3 text-base rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <i className="ri-navigation-line absolute left-4 top-3.5 text-xl text-gray-500" />
              </div>
            </form>
          </div>

          <div ref={panelRef} className="overflow-hidden bg-white h-0 ">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehicalePanel={setVehicalePanel}
            />
          </div>
        </div>
      </div>
      <div
        ref={vehicalePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-8  "
      >
        <VehiclePanel
          setComfirmedRidePanel={setComfirmedRidePanel}
          setVehicalePanel={setVehicalePanel}
        />
      </div>

      <div
        ref={confirmedRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 "
      >
        <ConfirmedRide
          setComfirmedRidePanel={setComfirmedRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 "
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0  bg-white px-3 py-8 "
      >
        <WaitingForDriver
          waitingForDriver={waitingForDriver}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
    </div>
  );
};

export default Home;
