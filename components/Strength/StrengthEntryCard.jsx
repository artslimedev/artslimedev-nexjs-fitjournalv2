import React from "react";
import { data } from "@/data/data";

const StrengthEntryCard = () => {
  return (
    <div className="sm:hidden mt-4">
      <ul>
        {data.map((order, id) => (
          <li key={id} className="bg-white rounded-lg shadow my-4">
            <div className="card p-4 grid grid-cols-3 items-center justify-center">
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary col-span-1"
                style={{ "--value": 70 }}
              >
                70%
              </div>
              <div className="col-span-1 items-center justify-center">
                <p className="text-lg font-bold">Machine</p>
                <p>{order.date}</p>
              </div>

              <div className="col-span-1 text-center text-3xl font-bold">
                <p>{order.name.first + " " + order.name.last}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrengthEntryCard;
