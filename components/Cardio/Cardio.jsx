import React from "react";
import LineChart from "../LineChart";
import Stats from "../Stats";
import CardioForm from "./CardioForm";
import CardioEntries from "./CardioEntries";
import CardioEntryCard from "./CardioEntryCard";

const Cardio = () => {
  return (
    <>
      <div className="w-full items-center md:grid md:grid-cols-5 ml-3 pb-8 pr-8 gap-x-10">
        <LineChart />
        <Stats />
      </div>
      <div className="bg-white border rounded-lg shadow pt-3">
        <CardioForm />
        <CardioEntries />
      </div>
      <CardioEntryCard />
    </>
  );
};

export default Cardio;
