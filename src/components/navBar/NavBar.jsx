import { CiShoppingCart } from "react-icons/ci";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-4xl bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 bg-clip-text text-transparent py-8">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold  menu menu-horizontal px-1 space-x-4">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost rounded-full text-3xl">
          <CiShoppingCart />
        </button>
        <button className="btn btn-ghost font-bold rounded-full mr-3">Login</button>
        <button className="btn rounded-full bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
