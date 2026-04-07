import React from "react";

const BannerBottom = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 place-items-center mb-20 py-15 bg-linear-to-r from bg-blue-500 via-purple-600 to-purple-800 lg:px-50 md:px-20">
      
      <div className="flex flex-col text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-white">500K+</h1>
        <h3 className="text-2xl font-medium text-white">Active Users</h3>
      </div>

      <div className="divider lg:divider-horizontal"></div>

      <div className="flex flex-col text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-white">200+</h1>
        <h3 className="text-2xl font-medium text-white">Premium Tools</h3>
      </div>

      <div className="divider lg:divider-horizontal"></div>

      <div className="flex flex-col text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-white">4.9+</h1>
        <h3 className="text-2xl font-medium text-white">Ratings</h3>
      </div>

    </div>
  );
};

export default BannerBottom;
