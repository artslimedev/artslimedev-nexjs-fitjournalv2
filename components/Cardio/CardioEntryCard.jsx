import React from "react";
import { workouts } from "@/data/workoutsMock";

const CardioEntryCard = () => {
  // Calculate max distance from all workouts
  const maxDistance = Math.max(
    ...workouts.map((workout) => workout.cardio.Distance || 0)
  );

  const calculatePercentage = (distance) => {
    if (!distance) return 0;
    return parseFloat(((distance / maxDistance) * 100).toFixed(0));
  };
  if (!workouts || workouts.length === 0) {
    return (
      <p className="text-center text-gray-500">No cardio entries found.</p>
    );
  }

  return (
    <div className="sm:hidden mt-4">
      <ul>
        {workouts.map((workout, id) => (
          <li key={id} className="bg-white rounded-lg shadow my-4">
            <div className="card p-4 grid grid-cols-7 items-center justify-center">
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary col-span-2"
                style={{
                  "--value": calculatePercentage(workout.cardio.Distance),
                }}
              >
                {workout.cardio.Distance} {workout.cardio.Unit}
              </div>
              <div className="col-span-2 items-center justify-center ml-1">
                <p className="text-lg font-bold">Location</p>
                <p className="text-xl">{workout.cardio.Time}</p>
              </div>

              <div className="col-span-3 text-center text-2xl font-extrabold">
                <p>{workout.cardio.Sport}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardioEntryCard;
