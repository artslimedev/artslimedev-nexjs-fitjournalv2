import React from "react";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/cardio/getCardio");
    let cardioEntries = await response.json();

    return {
      props: { cardioEntries: JSON.parse(JSON.stringify(cardioEntries)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default function CardioEntries() {
  const [cardioEntries, setCardioEntries] = useState();

  // const handleDeleteCardio = async (cardioEntrytId) => {
  //   try {
  //     let response = await fetch(
  //       "http://localhost:3000/api/cardio/deleteCardio?id=" + cardioEntrytId,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json, text/plain, */*",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     response = await response.json();
  //     window.location.reload();
  //   } catch (error) {
  //     console.log("An error occurred while deleting ", error);
  //   }
  // };

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Entries</h1>
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
      {cardioEntries.length > 0 ? (
        <ul>
          {cardioEntries.map((entry, id) => {
            return (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div>
                  <p className="pl-4">{entry.date}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {entry.location}
                </p>
                <p className="hidden md:flex">{entry.sport}</p>
                <div>
                  <p className="sm:flex hidden justify-between items-center">
                    {entry.time}
                  </p>
                </div>
                <div>
                  <p className="sm:flex hidden justify-between items-center">
                    {entry.distance} + {entry.unit}
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
            );
          })}
        </ul>
      ) : (
        <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
      )}
    </div>
  );
}
