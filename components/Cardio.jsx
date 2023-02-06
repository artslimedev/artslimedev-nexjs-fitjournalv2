import React from "react";
import CardioEntries from "./CardioEntries";
import CardioForm from "./CardioForm";
import CardsFlex from "./CardsFlex";
import LineChart from "./LineChart";

const Cardio = () => {
  return (
    <>
      <div className="flex flex-col items-center md:grid md:grid-cols-7 w-full h-full">
        <LineChart />
        <CardsFlex />
      </div>
      <div>
        <CardioForm />
      </div>
      <div>
        <CardioEntries />
      </div>
    </>
  );
};

export default Cardio;
