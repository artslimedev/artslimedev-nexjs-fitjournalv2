import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales of the week",
          data: [6, 3, 9, 5, 2.3, 7],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    });
    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Line Chart",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          min: 0,
          max: 10,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  });

  // const data = {
  //     title: 'Line Chart',
  //     labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  //     datasets: [{
  //         label: 'Sales of the week',
  //         data: [6,3,9,5,2.3,7],
  //         backgroundColor: 'aqua',
  //         borderColor: 'black',
  //         pointBorderColor: 'aqua',
  //         fill: true,
  //         tension: 0
  //         }
  //     ]
  // }

  // const options = {
  //     plugins: {
  //         legend: true
  //     },
  //     scales: {
  //         y: {
  //             min: 1,
  //             max: 11
  //         }
  //     }
  // }

  return (
    <>
      <div className=" relative sm:flex flex-col col-span-6 p-5 text-lg bg-white rounded-lg">
        <Line
          data={chartData}
          options={chartOptions}
          className="min-w-[460px]"
        ></Line>
      </div>
    </>
  );
};

export default LineChart;
