import React from "react";

const Products = () => {
  return (
    <div>
      <div className="space-y-6 w-5/12 mx-auto mb-10">
        <h1 className="text-center text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h1>
        <h5 className="text-center text-[#627383] leading-5 text-[16px]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity
        </h5>

        <div className="text-center ">
          <button className="btn rounded-full bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 text-white">
            Products
          </button>
          <button className="btn rounded-full  linear-text">
            Cart (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
