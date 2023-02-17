import React from "react";
import { data } from "@/data/data";

const CardioEntryCard = () => {
  return (
    <div className="sm:hidden mt-4">
      <ul>
        {data.map((order, id) => (
          <li key={id} className="bg-white rounded-lg shadow my-4">
            <div className="card p-4 grid grid-cols-7 items-center justify-center">
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary col-span-2"
                style={{ "--value": 70 }}
              >
                70%
              </div>
              <div className="col-span-2 items-center justify-center ml-1">
                <p className="text-lg font-bold">Location</p>
                <p className="text-xl">{order.date}</p>
              </div>

              <div className="col-span-3 text-center text-2xl font-extrabold">
                <p>{order.name.first + " " + order.name.last}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardioEntryCard;
