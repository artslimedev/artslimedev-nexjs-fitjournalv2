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

const defaultOptions = {
  plugins: {
    title: {
      display: true,
      text: "Line Chart",
      fullsize: true,
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
  layout: {
    padding: 30,
  },
};

const defaultChartData = {
  labels: ["", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sales of the week",
      data: [null, 6, 3, 9, 5, 2.3, 7],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
};

const LineChart = () => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(defaultChartData);
    setChartOptions(defaultOptions);
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
      <div className="bg-white col-span-5 lg:col-span-4 min-h-[350px] sm:min-h-[542px] sm:max-h-full sm:p-5 rounded-lg shadow h-full w-full">
        <Line data={chartData} options={chartOptions} className=""></Line>
      </div>
    </>
  );
};

export default LineChart;
