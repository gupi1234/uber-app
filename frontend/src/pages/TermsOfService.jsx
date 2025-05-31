import React from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white min-h-screen text-gray-900 font-sans">
      {/* Back Button */}
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

      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-5 text-base leading-relaxed">
        By using our app, you agree to the following terms and conditions.
        Please read them carefully.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. User Responsibility</h2>
        <p className="text-base leading-relaxed">
          Users must provide accurate information and are responsible for all
          activity on their accounts.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Booking & Payments</h2>
        <p className="text-base leading-relaxed">
          All rides must be paid through the app using accepted payment methods.
          Cancelling too often may lead to account review.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Conduct</h2>
        <p className="text-base leading-relaxed">
          Both riders and drivers must treat each other with respect. Any form
          of harassment or illegal activity will lead to account termination.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Changes to Terms</h2>
        <p className="text-base leading-relaxed">
          We may update these terms anytime. Continued use of the app means you
          accept the changes.
        </p>
      </section>

      <p className="text-base">
        For questions, email us at{" "}
        <a
          href="mailto:support@uberclone.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          support@uberclone.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsOfService;
