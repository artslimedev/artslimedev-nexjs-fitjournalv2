import React from "react";
import StrengthEntries from "./StrengthEntries";
import StrengthForm from "./StrengthForm";
import LineChart from "../LineChart";
import Stats from "../Stats";
import StrengthEntryCard from "./StrengthEntryCard";

const Strength = () => {
  return (
    <>
      <div className="w-full items-center sm:grid sm:grid-cols-5 ml-3 pb-8 pr-8 gap-x-10">
        <LineChart />
        <Stats />
      </div>
      <div className="bg-white border rounded-lg shadow pt-3">
        <StrengthForm />
        <StrengthEntries />
      </div>
      <StrengthEntryCard />
    </>
  );
};

export default Strength;
