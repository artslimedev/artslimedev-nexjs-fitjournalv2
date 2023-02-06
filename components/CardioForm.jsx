import React from "react";

const CardioForm = () => {
  return (
    <div>
      <form className="flex items-center justify-center w-full col-span-5">
        <div className="flex flex-col sm:flex-row flex-wrap my-6 justify-center items-center w-full gap-2">
          <input
            type="date"
            name="date"
            id=""
            className="input bg-white rounded p-2 basis-2/5 max-w-[150px]"
          />

          <div className="flex w-full sm:w-fit">
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="p-2 input input-bordered w-full mb-2.5 sm:mx-2 sm:w-fit basis-3/5"
            />

            <select
              name="sport"
              className="input input-bordered w-full basis-2/5 sm:mx-2 sm:grow-0 sm:w-fit"
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
            name="date"
            id=""
            className="bg-white rounded p-1"
          />
          <div className="flex w-full mb-2.5 sm:mx-2 sm:w-fit">
            <input
              type="number"
              step="0.1"
              min="0"
              placeholder="Distance"
              name="distance"
              className="input input-bordered w-full sm:mx-2 mb-2.5 sm:grow-0 basis-3/5 sm:w-fit"
              required
            />

            <select
              name="unit"
              className="input input-bordered w-full sm:mx-2 sm:grow-0 sm:w-fit pl-0.5 basis-2/5"
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
          <button type="submit" className="btn bg-white rounded p-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardioForm;
