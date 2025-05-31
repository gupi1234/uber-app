import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white min-h-screen text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="
          flex items-center gap-2 
          bg-white border border-blue-600 
          text-blue-600 font-semibold 
          px-4 py-2 rounded-full 
          shadow-md
          hover:bg-blue-600 hover:text-white 
          transition-colors duration-300
          focus:outline-none focus:ring-4 focus:ring-blue-300
          select-none
          active:scale-95
          mb-6
        "
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-sm">
        We value your privacy and are committed to protecting your personal
        data. This policy explains how we collect, use, and store your
        information.
      </p>

      <h2 className="text-lg font-semibold mb-2">1. Information Collection</h2>
      <p className="mb-4 text-sm">
        We collect your name, email, phone number, and location data when you
        use our app to provide better service.
      </p>

      <h2 className="text-lg font-semibold mb-2">2. Usage of Data</h2>
      <p className="mb-4 text-sm">
        Your data is used for trip matching, communication, safety measures, and
        improving our services.
      </p>

      <h2 className="text-lg font-semibold mb-2">3. Sharing of Data</h2>
      <p className="mb-4 text-sm">
        We do not sell your data. Data is shared only with drivers, partners,
        and law enforcement when legally required.
      </p>

      <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
      <p className="mb-4 text-sm">
        We implement secure practices to protect your data, including
        encryption, secure servers, and strict access control.
      </p>

      <p className="text-sm">
        If you have questions, contact us at{" "}
        <a href="mailto:support@uberclone.com" className="text-blue-600">
          support@uberclone.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
