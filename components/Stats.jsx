import React from "react";

const Stats = () => {
  return (
    <div className="hidden lg:flex lg:flex-col justify-center items-center mx-5 ml-4 mt-6 md:mt-0 md:space-y-8 lg:col-span-1 ">
      <div className="stats shadow flex justify-center items-center p-3">
        <div className="stat">
          <div className="stat-title">Total Distance</div>
          <div className="stat-value my-4">250mi</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stats shadow p-3">
        <div className="stat">
          <div className="stat-title">Farthest</div>
          <div className="stat-value my-4">17mi</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stats shadow p-3">
        <div className="stat">
          <div className="stat-title">Fastest</div>
          <div className="stat-value my-4">01:23:54</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
