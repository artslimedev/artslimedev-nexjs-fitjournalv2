"use client";
import React from "react";

const CardioForm = () => {
  return (
    <div className="p-4 w-full flex justify-center items-center">
      <form className="w-full flex flex-wrap md:justify-center">
        <input
          type="date"
          name="date"
          id=""
          className="input input-bordered w-full mb-2.5 md:mx-2 md:grow-0 md:w-fit"
        />

        <div className="flex w-full md:w-fit">
          <input
            type="text"
            placeholder="Location"
            name="locations"
            className="input input-bordered w-full mb-2.5 md:mx-2 sm:w-fit basis-3/5"
          />

          <select
            name="sport"
            className="input input-bordered w-full basis-2/5 md:mx-2 md:grow-0 sm:w-fit"
            defaultValue={"default"}
            required
          >
            <option disabled value="default">
              Sport
            </option>
            <option>Bike</option>
            <option>Run</option>
            <option>Hike</option>
            <option>Jumprope</option>
          </select>
        </div>
        <input
          type="text"
          name="time"
          placeholder="Time 00:00:00"
          id=""
          className="input input-bordered w-full mb-2.5 md:mx-2 md:w-fit md:grow-0"
        />
        <div className="flex w-full md:mx-2 md:w-fit">
          <input
            type="number"
            step="0.1"
            min="0"
            placeholder="Distance"
            name="distance"
            className="input input-bordered w-full md:mx-2 mb-2.5 md:grow-0 basis-3/5 md:w-fit"
            required
          />

          <select
            name="unit"
            className="input input-bordered w-full md:mx-2 sm:grow-0 md:w-fit pl-0.5 basis-2/5"
            defaultValue={"default"}
            required
          >
            <option disabled value="default">
              Unit
            </option>
            <option>mi</option>
            <option>km</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-neutral text-black w-full md:w-fit bg-base-100 border-1 border-stone-300 hover:bg-blue-200 px-3 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardioForm;
