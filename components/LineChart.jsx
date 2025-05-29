"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components
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
      text: "Workout Progress",
      fullsize: true,
    },
    legend: {
      display: true,
      position: "top",
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
      grid: {
        display: true,
      },
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  layout: {
    padding: 20,
  },
};

const defaultChartData = {
  labels: ["", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Distance (miles)",
      data: [null, 6, 3, 9, 5, 2.3, 7],
      backgroundColor: "rgba(147, 51, 234, 0.5)", // Matches your purple theme
      borderColor: "rgb(147, 51, 234)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const LineChart = () => {
  const [mounted, setMounted] = useState(false);
  const [chartData, setChartData] = useState(defaultChartData);
  const [chartOptions, setChartOptions] = useState(defaultOptions);

  useEffect(() => {
    setMounted(true);
    setChartData(defaultChartData);
    setChartOptions(defaultOptions);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-white col-span-5 lg:col-span-4 min-h-[350px] sm:min-h-[542px] rounded-lg shadow h-full w-full flex items-center justify-center">
        Loading chart...
      </div>
    );
  }

  return (
    <div className="bg-white col-span-5 lg:col-span-4 min-h-[350px] sm:min-h-[542px] sm:p-5 rounded-lg shadow h-full w-full">
      <Line data={chartData} options={chartOptions} className="w-full h-full" />
    </div>
  );
};

export default LineChart;
