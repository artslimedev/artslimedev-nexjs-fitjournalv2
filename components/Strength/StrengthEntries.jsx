import React from "react";
import { workouts } from "@/data/workoutsMock";

const StrengthEntries = () => {
  return (
    <>
      <div className="hidden sm:block w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white overflow-scroll">
        <div className="px-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <p className="hidden md:block">Date</p>
              <p className="hidden md:block">Location</p>
              <p className="sm:text-left text-right">Equipment</p>
              <p>Muscle</p>
              <p>Weight</p>
            </div>
          </div>
        </div>
        <ul className="w-full m-auto p-4 bg-white overflow-y-auto">
          {workouts.map((workout, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
            >
              <div className="hidden md:block">
                <p className="pl-4">{workout.strength.Date}</p>
              </div>
              <p className="hidden md:block text-gray-600 sm:text-left text-right">
                {workout.cardio.Location}
              </p>
              <p className="text-gray-600 sm:text-left text-right">
                {workout.strength.Equipment}
              </p>
              <p>{workout.strength.Muscle}</p>
              <div>
                <p className="flex justify-between items-center">
                  {workout.strength.Weight}
                  {workout.strength.Unit}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StrengthEntries;
