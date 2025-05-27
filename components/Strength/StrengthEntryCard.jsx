import React from "react";
import { workouts } from "@/data/workoutsMock";

const StrengthEntryCard = () => {
  // Calculate max weight from all workouts
  const maxWeight = Math.max(
    ...workouts.map((workout) => workout.strength.Weight || 0)
  );

  const calculatePercentage = (weight) => {
    if (!weight) return 0;
    return parseFloat(((weight / maxWeight) * 100).toFixed(0));
  };
  return (
    <div className="sm:hidden mt-4">
      <ul>
        {workouts.map((workout, id) => (
          <li key={id} className="bg-white rounded-lg shadow my-4">
            <div className="card p-4 grid grid-cols-3 items-center justify-center">
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary col-span-1"
                style={{
                  "--value": calculatePercentage(workout.strength.Weight),
                }}
                role="progressbar"
              >
                {workout.strength.Weight}lbs
              </div>
              <div className="col-span-1 items-center justify-center">
                <p className="text-lg font-bold">Machine</p>
                <p>{workout.strength.Equipment}</p>
              </div>

              <div className="col-span-1 text-center text-3xl font-bold">
                <p>{workout.strength.Muscle}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrengthEntryCard;
