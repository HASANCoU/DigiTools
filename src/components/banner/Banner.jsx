import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-3 my-15">
      <div className="flex flex-col space-y-4">

          <div className="flex items-center gap-2 bg-purple-300  rounded-full p-2 w-68">
            <div className="w-4 h-4 bg-purple-200 rounded-full flex justify-center items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <h4 className="bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 bg-clip-text text-transparent">
              New AI-Powered Tools Available
            </h4>
          </div>

          <h1 className="text-[#101727] font-extrabold text-4xl md:text-7xl md:leading-20">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-[#627382] text-xl leading-5">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="space-x-4">
            <button className="btn rounded-full bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 text-white">
              Explore Products
            </button>
            <button className="btn btn-ghost rounded-full linear-text border border-purple-700">
              <FaPlay className="text-purple-800 " /> Watch Demo
            </button>
          </div>

      </div>

      <img src={bannerImg} alt="Banner Image" className="w-125" />
    </div>
  );
};

export default Banner;
