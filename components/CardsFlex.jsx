import React from "react";

const Cards = () => {
  return (
    <>
      <div className="hidden lg:flex md:flex-col justify-center items-center mx-5 mt-6 md:mt-0 w-full md:space-y-8 h-full">
        <div className="flex flex-col items-center border p-4 rounded-lg min-w-[150px] bg-white">
          <div className="flex flex-col pb-4">
            <p className="text-2xl font-bold">$7,846</p>
            <p className="text-gray-600">Daily Revenue</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+18%</span>
          </p>
        </div>
        <div className="flex flex-col items-center border p-4 rounded-lg min-w-[150PX] bg-white">
          <div className="flex flex-col pb-4">
            <p className="text-2xl font-bold">$4,876</p>
            <p className="text-gray-600">YTD Revenue</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+11%</span>
          </p>
        </div>
        <div className="flex flex-col  items-center border p-4 rounded-lg min-w-[150px] bg-white">
          <div className="flex flex-col pb-4">
            <p className="text-2xl font-bold">11,437</p>
            <p className="text-gray-600">Customers</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+17%</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
