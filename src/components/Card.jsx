import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

export const Card = () => {
  return (
    <div className="bg-white w-full px-4 py-[10rem]  ">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16  ">
        <div className="w-full border shadow-xl hover:shadow-2xl rounded-lg flex flex-col p-4 my-8   hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white  "
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-semibold text-center py-8 ">
            Single User
          </h2>
          <p className="font-bold text-3xl text-center  ">$149</p>
          <div className="text-center flex flex-col  font-medium">
            <p className="py-2 border-b mx-7  mt-7  ">500 GB Storage</p>
            <p className="py-2 border-b mx-7   ">1 Granted User</p>
            <p className="py-2 border-b mx-7   ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] mx-auto px-6 py-2 m-4 rounded-md max-w-[200px] hover:bg-[#2de6ab] font-medium  text-xl ">
            Start Trail
          </button>
        </div>
        <div className="w-full border shadow-xl bg-gray-50  hover:shadow-2xl rounded-lg flex flex-col p-4 my-8 hov md:my-0   hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent  "
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-semibold text-center py-8 ">
            Double User
          </h2>
          <p className="font-bold text-3xl text-center  ">$149</p>
          <div className="text-center flex flex-col  font-medium">
            <p className="py-2 border-b mx-7  mt-7  ">500 GB Storage</p>
            <p className="py-2 border-b mx-7   ">1 Granted User</p>
            <p className="py-2 border-b mx-7   ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#000] text-[#00df9a] hover:bg-[#00df9a] hover:text-black duration-500  mx-auto px-6 py-2 m-4 rounded-md max-w-[200px]  font-medium  text-xl ">
            Start Trail
          </button>
        </div>
        <div className="w-full border shadow-2xl rounded-lg flex flex-col p-4 my-8 hov    hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white  "
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-semibold text-center py-8 ">
            Triple User
          </h2>
          <p className="font-bold text-3xl text-center  ">$149</p>
          <div className="text-center flex flex-col  font-medium">
            <p className="py-2 border-b mx-7  mt-7  ">500 GB Storage</p>
            <p className="py-2 border-b mx-7   ">1 Granted User</p>
            <p className="py-2 border-b mx-7   ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] mx-auto px-6 py-2 m-4 rounded-md max-w-[200px] hover:bg-[#2de6ab] font-medium  text-xl ">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};
