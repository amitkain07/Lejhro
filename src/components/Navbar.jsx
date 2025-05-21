import React, { useState } from "react";
import logo from "../assets/lejhro.png";
import Lej from "../assets/lejhro_blue.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-amber-400 px-6 md:px-30 py-6 flex flex-col gap-6 z-50 shadow-md">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" width={160} />

          <ul className="hidden md:flex gap-10 font-semibold text-white text-xl">
            <li className="cursor-pointer hover:text-amber-200">Innovation</li>
            <li className="cursor-pointer hover:text-amber-200">
              Business Services
            </li>
            <li className="cursor-pointer hover:text-amber-200">
              Financial Services
            </li>
            <li className="cursor-pointer hover:text-amber-200">Bootcamp</li>
          </ul>

          <div
            className="bg-white w-10 h-10 rounded-full cursor-pointer flex justify-center items-center "
            onClick={() => setToggle(true)}
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <img src={Lej} alt="logo" className="w-32" />
            <div
              className="rounded-full border-2 border-black w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <RxCross2 />
            </div>
          </div>
          <hr className="mb-4" />
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li className="cursor-pointer">Innovation</li>
            <li className="cursor-pointer">Bootcamp</li>
            <li className="cursor-pointer">Business Services</li>
            <li className="cursor-pointer">Financial Services</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Blogs</li>
          </ul>
        </div>

        <div className="text-white font-bold text-4xl">Blogs</div>
      </div>


      <div className="h-[140px]"></div>
    </>
  );
};

export default Navbar;
