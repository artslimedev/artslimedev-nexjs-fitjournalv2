import React from "react";
import { workouts } from "@/data/workoutsMock";

const CardioEntries = () => {
  return (
    <div className="hidden sm:block w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 overflow-scroll">
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <p>Date</p>
            <p className="sm:text-left text-right">Location</p>
            <p className="hidden md:grid">Sport</p>
            <p className="hidden sm:grid">Time</p>
            <p className="hidden sm:grid">Distance</p>
          </div>
        </div>
      </div>
      <ul>
        {workouts.map((workout, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
          >
            <div>
              <p className="pl-4">{workout.cardio.Date}</p>
            </div>
            <p className="text-gray-600 sm:text-left text-right">
              {workout.cardio.Location}
            </p>
            <p className="hidden md:flex">{workout.cardio.Sport}</p>
            <div>
              <p className="sm:flex hidden justify-between items-center">
                {workout.cardio.Time}
              </p>
            </div>
            <div>
              <p className="sm:flex hidden justify-between items-center">
                {workout.cardio.Distance} {workout.cardio.Unit}
              </p>
            </div>
          </li>

          // <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
          //     <div className='pl-4'>
          //         <p className='text-gray-800 font-bold'>${order.total}</p>
          //         <p className='text-gray-400 text-sm'>{order.name.first}</p>
          //         <p className='lg:flex md:hidden text-sm'>{order.date}</p>
          //     </div>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default CardioEntries;
