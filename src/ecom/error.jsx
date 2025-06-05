import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handlegoback = () => {
    navigate(-1);
  };
  console.log(error);
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <img
          src="/undraw_page-not-found.svg"
          alt="Stepping Up"
          className="max-w-full h-auto"
        />
        <button
          onClick={handlegoback}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
