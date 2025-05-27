import React from "react";
import { workouts } from "@/data/workoutsMock";

const Stats = () => {
  // Helper function to convert km to mi
  const kmToMiles = (km) => km * 0.621371;

  // Calculate total distance (converted to miles)
  const totalDistance = workouts.reduce((total, workout) => {
    const distance = workout.cardio.Distance || 0;
    const unit = workout.cardio.Unit || "mi";
    return total + (unit === "km" ? kmToMiles(distance) : distance);
  }, 0);

  // Calculate the longest distance from all workouts
  const longestDistanceWorkout = workouts.reduce((max, workout) => {
    return (workout.cardio.Distance || 0) > (max.cardio.Distance || 0)
      ? workout
      : max;
  }, workouts[0]);

  const longestDistance = longestDistanceWorkout?.cardio.Distance || 0;
  const distanceUnit = longestDistanceWorkout?.cardio.Unit || "mi";

  // Find fastest time from running or cycling workouts
  const fastestWorkout = workouts
    .filter(
      (workout) =>
        workout.cardio.Sport === "Running" || workout.cardio.Sport === "Cycling"
    )
    .reduce(
      (fastest, workout) => {
        if (!workout.cardio.Time) return fastest;
        if (!fastest.cardio.Time) return workout;
        return workout.cardio.Time < fastest.cardio.Time ? workout : fastest;
      },
      { cardio: { Time: null } }
    );

  const fastestTime = fastestWorkout?.cardio.Time || "00:00:00";
  const fastestSport = fastestWorkout?.cardio.Sport || "N/A";
  return (
    <div className="hidden lg:flex lg:flex-col justify-center items-center mx-5 ml-4 mt-6 md:mt-0 md:space-y-8 lg:col-span-1 ">
      <div className="stats shadow flex justify-center items-center p-3">
        <div className="stat">
          <div className="stat-title">Total Distance</div>
          <div className="stat-value my-4">{totalDistance.toFixed(1)}mi</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stats shadow p-3">
        <div className="stat">
          <div className="stat-title">Farthest</div>
          <div className="stat-value my-4">
            {longestDistance}
            {distanceUnit}
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stats shadow p-3">
        <div className="stat">
          <div className="stat-title">Fastest</div>
          <div className="stat-value my-4">{fastestTime}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
