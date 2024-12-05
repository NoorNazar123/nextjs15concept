import React from 'react';

const Analyze = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Data Analysis Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get insights and analytics from the latest data trends and reports. Stay up-to-date with the
          most recent information to make informed decisions.
        </p>

        {/* Add a simple placeholder for charts/graphs */}
        <div className="bg-gray-200 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Overview</h2>
          <p className="text-gray-500">Chart or Graph placeholder</p>
        </div>

        {/* Button to simulate navigating to a more detailed page */}
        <a
          href="#"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          View Detailed Analysis
        </a>
      </div>
    </div>
  );
};

export default Analyze;
