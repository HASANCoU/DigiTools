import React from "react";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png"
import rocketImg from "../../assets/rocket.png"
const Steps = () => {
  return (
    <div className="text-[#101727] py-30 bg-[#F9FAFC] space-y-10">
      <h1 className="text-5xl font-extrabold text-center">
        Get Started in 3 Steps
      </h1>
      <p className="text-xl text-[#627382] text-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-md w-9/12 mx-auto">

        <div className="bg-[#F1F1F1] space-y-6 rounded-xl p-6 pb-12 flex flex-col justify-center">
          <div className="flex justify-end">
            <h1 className="bg-linear-to-r from-purple-600 via-purple-800 to-purple-900  rounded-full w-8 p-2 text-center text-white text-xs font-bold">
              01
            </h1>
          </div>
          <div className="p-4 bg-purple-300 rounded-full w-20 flex mx-auto">
            <img src={userImg} alt="User Icon w-20" />
          </div>
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <p className="text-[16px] text-[#627382] text-center">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="bg-[#F1F1F1] space-y-6 rounded-xl p-6 pb-12 flex flex-col justify-center">
          <div className="flex justify-end">
            <h1 className="bg-linear-to-r from-purple-600 via-purple-800 to-purple-900  rounded-full w-8 p-2 text-center text-white text-xs font-bold">
              02
            </h1>
          </div>
          <div className="p-4 bg-purple-300 rounded-full w-20 flex mx-auto">
            <img src={packageImg} alt="User Icon w-20" />
          </div>
          <h1 className="text-2xl font-bold text-center">Choose Products</h1>
          <p className="text-[16px] text-[#627382] text-center">
            Browse our catalog and select the toolsthat fit your needs.
          </p>
        </div>

        <div className="bg-[#F1F1F1] space-y-6 rounded-xl p-6 pb-12 flex flex-col justify-center">
          <div className="flex justify-end">
            <h1 className="bg-linear-to-r from-purple-600 via-purple-800 to-purple-900  rounded-full w-8 p-2 text-center text-white text-xs font-bold">
              03
            </h1>
          </div>
          <div className="p-4 bg-purple-300 rounded-full w-20 flex mx-auto">
            <img src={rocketImg} alt="User Icon w-20" />
          </div>
          <h1 className="text-2xl font-bold text-center">Start Creating</h1>
          <p className="text-[16px] text-[#627382] text-center">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;
