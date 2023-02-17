import React, { useState } from "react";

export default function AddCardio() {
  const [date, setTDate] = useState("");
  const [location, setLocation] = useState("");
  const [sport, setSport] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date && location && sport && time && distance && unit) {
      try {
        let response = await fetch(
          "http://localhost:3000/api/cardio/addCardio",
          {
            method: "POST",
            body: JSON.stringify({
              date,
              location,
              sport,
              time,
              distance,
              unit,
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        setDate("");
        setLocation("");
        setSport("");
        setTime("");
        setDistance("");
        setUnit("");
        setError("");
        setMessage("Post added successfully");
      } catch (error) {
        setError(errorMessage);
      }
    } else {
      return setError("All fields are required");
    }
  };
}

const CardioForm = () => {
  return (
    <div className="p-4 w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap md:justify-center"
      >
        {error ? <div className="alert-error">{error}</div> : null}
        {message ? <div className="alert-message">{message}</div> : null}
        <input
          type="date"
          name="date"
          id=""
          className="input input-bordered w-full mb-2.5 md:mx-2 md:grow-0 md:w-fit"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <div className="flex w-full md:w-fit">
          <input
            type="text"
            placeholder="Location"
            name="locations"
            className="input input-bordered w-full mb-2.5 md:mx-2 sm:w-fit basis-3/5"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />

          <select
            name="sport"
            className="input input-bordered w-full basis-2/5 md:mx-2 md:grow-0 sm:w-fit"
            defaultValue={"default"}
            required
            onChange={(e) => setSport(e.target.value)}
            value={sport}
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
          onChange={setTime}
          value={time}
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
            onChange={setDistance}
            value={distance}
          />

          <select
            name="unit"
            className="input input-bordered w-full md:mx-2 sm:grow-0 md:w-fit pl-0.5 basis-2/5"
            defaultValue={"default"}
            required
            onChange={setUnit}
            value={unit}
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
