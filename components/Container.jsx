import React from "react";
import Strength from "./Strength";
import Cardio from "./Cardio";

const Container = () => {
  return (
    <div className="tab-wrapper w-full rounded-lg">
      <div className="tab-header relative flex justify-center md:justify-start gap-x-4 w-full">
        <button className="tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 focus:bg-purple-400">
          Cardio
        </button>
        <button className="tab-btn text-lg bg-white shadow-lg shadow-black-500/10 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-400 focus:bg-purple-400">
          Strength
        </button>
      </div>

      <div className="tab-body flex rounded-lg overflow-hidden w-full mt-3">
        <div className="tab-content text-justify min-w-full h-full delay-300">
          <Cardio />
        </div>

        <div className="tab-content text-justify min-w-full p-5 delay-300">
          <Strength />
        </div>
      </div>
    </div>
  );
};

export default Container;
