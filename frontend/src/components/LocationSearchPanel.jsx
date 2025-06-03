import React from "react";

const LocationSearchPanel = (props) => {
  // locations for example
  const locations = [
    "24B, near Jahannager School, MA Masha Mandir, West Bengal",
    "Sector 5, Salt Lake, near Technopolis, Kolkata, West Bengal",
  ];

  return (
    <div className="space-y-3">
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setVehicalePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex items-center border-2 border-gray-200 hover:border-gray-400 active:border-black transition duration-200 p-4 rounded-xl gap-4 bg-white shadow-sm"
        >
          <div className="bg-gray-100 flex items-center justify-center p-2 rounded-full h-10 w-10 text-xl text-gray-600">
            <i className="ri-map-pin-line"></i>
          </div>
          <h4 className="font-medium text-sm text-gray-800">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
