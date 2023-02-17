import React from "react";
import StrengthEntries from "./StrengthEntries";
import StrengthForm from "./StrengthForm";
import CardsFlex from "./CardsFlex";
import LineChart from "./LineChart";

const Strength = () => {
  return (
    <>
      <div className="flex flex-col items-center md:grid md:grid-cols-7 w-full h-full">
        <LineChart />
        <CardsFlex />
      </div>
      <div>
        <StrengthForm />
      </div>
      <div>
        <StrengthEntries />
      </div>
    </>
  );
};

export default Strength;
