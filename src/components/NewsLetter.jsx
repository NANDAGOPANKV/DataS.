import React from "react";

export const NewsLetter = () => {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="max-w-[1240px]  mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2  my-2">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2 ">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-2">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full ">
            <input
              className="p-3 w-full mx-auto rounded-md outline-none text-black font-medium  "
              type="email"
              placeholder="Enter Email"
            />
            <button className="capitalize bg-[#00df9a] w-[200px]  rounded-md text-black font-medium hover:bg-[#2de6ab] py-3 lg:ml-2  px-5 my-4 ">
              notify me
            </button>
          </div>
          <p className="p-2 ">
            We care about the protection of your data. Read our
            <span className="text-[#00df9a] underline "> Privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
