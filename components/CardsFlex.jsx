import React from "react";

const CardsFlex = () => {
  return (
    <>
      <div className="hidden lg:flex md:flex-col justify-center items-center mx-5 mt-6 md:mt-0 w-full md:space-y-8 h-full">
        <div className="stats flex flex-col justify-center items-center border p-4 rounded-lg min-w-[150px] bg-white">
          <div className="flex flex-col pb-4 items-center">
            <p className="text-2xl font-bold">01:33:19</p>
            <p className="text-gray-600">Fastest Time</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+18%</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border p-4 rounded-lg min-w-[150px] bg-white">
          <div className="flex flex-col pb-4 items-center">
            <p className="text-2xl font-bold">250mi</p>
            <p className="text-gray-600">Total Distance</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+11%</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border p-4 rounded-lg min-w-[150px] bg-white">
          <div className="flex flex-col pb-4 items-center">
            <p className="text-2xl font-bold">17mi</p>
            <p className="text-gray-600">Longest</p>
            <p className="text-gray-600">Distance</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+17%</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardsFlex;
