import React from "react";
import laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="bg-white px-4 py-12 w-full">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-2 items-center ">
        <div className="">
          <img className="w-[500px] mx-auto my-4  " src={laptop} alt="/" />
        </div>
        <div className="flex flex-col justify-center   ">
          <p className="uppercase text-[#00df9a] font-bold ">
            data analytics dashboar
          </p>
          <h1 className="capitalize py-2 text-xl font-bold sm:text-3xl  md:text-4xl  ">
            manage data analytics centrally
          </h1>
          <p className="text-lg">
            Progress is crucial for every organization. Centralized analytics
            opens the door for increased communication and knowledge sharing
            among all departments, as well as growth within the data team.
          </p>
          <button className="capitalize mx-auto md:mx-0  my-3  py-2 w-[200px] text-[#00df9a] bg-black rounded-md  hover:bg-[#00df9a] hover:text-black duration-500 font-medium  ">
            get started
          </button>
        </div>
      </div>
    </div>
  );
};
