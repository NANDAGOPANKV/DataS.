import React from "react";
import Typed from "react-typed";

export const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] h-screen text-center mx-auto flex flex-col justify-center  ">
        <p className="uppercase  text-[#00df9a] p-2 font-bold">
          growing with data analytics
        </p>
        <h1 className=" font-semibold text-4xl sm:text-6xl md:text-7xl ">
          Grow with data.
        </h1>
        <div className="flex  justify-center items-center  ">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            Fast,flexible,financing for
          </p>
          <Typed
            className="text-xl sm:text-4xl md:text-5xl font-bold md:pl-4 pl-2 "
            strings={["BTB", "BTC", "SASS"]}
            loop
            typeSpeed={120}
            backSpeed={140}
          />
        </div>
        <p className="md:text-2xl text-xl  font-bold text-gray-500 py-2">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="px-8 py-2 w-[200px] text-center bg-[#00df9a]  hover:bg-[#2de6ab] text-black font-medium rounded-md mx-auto ">
          Get Started
        </button>
      </div>
    </div>
  );
};
