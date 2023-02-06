import React from "react";
import CardsFlex from "./CardsFlex";
import LineChart from "./LineChart";

const Strength = () => {
  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-5 w-full h-full">
      <LineChart />
      <CardsFlex />
    </div>
  );
};

export default Strength;
