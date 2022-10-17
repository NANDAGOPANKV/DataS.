import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1640px] px-4 mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]  ">DataS.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a] duration-300 cursor-default md:font-bold uppercase ">
          Home
        </li>
        <li className="p-4 hover:text-[#00df9a] duration-300 cursor-default md:font-bold uppercase">
          Company
        </li>
        <li className="p-4 hover:text-[#00df9a] duration-300 cursor-default md:font-bold uppercase">
          Resources
        </li>
        <li className="p-4 hover:text-[#00df9a] duration-300 cursor-default md:font-bold uppercase">
          About
        </li>
        <li className="p-4 hover:text-[#00df9a] duration-300 cursor-default md:font-bold uppercase">
          Contact
        </li>
      </ul>
      <div
        className="px-2 block md:hidden "
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-[-100%] p-1 w-[60%] border-r h-full border-r-gray-700 bg-[#000300] ease-in-out  duration-700 "
            : "fixed top-0 left-0 p-1 w-[60%] border-r h-full border-r-gray-700 bg-[#000300] ease-out  duration-1000"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4 ">DataS.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-slate-600  ">Home</li>
          <li className="p-4 border-b border-slate-600  ">Company</li>
          <li className="p-4 border-b border-slate-600  ">Resources</li>
          <li className="p-4 border-b border-slate-600  ">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
