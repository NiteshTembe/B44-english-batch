import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Income"],
  ["Jan", 0],
  ["Feb", 1000],
  ["Mar", 5000],
  ["Apr", 15000],
  ["May", 10000],
  ["Jun", 20000],
  ["Jul", 15000],
  ["Aug", 25000],
  ["Sep", 20000],
  ["Oct", 30000],
  ["Nov", 25000],
  ["Dec", 40000],
];

export const options = {
  curveType: "function",
  legend: "none",
  animation: { startup: true, duration: 1500, easing: "out" },
  vAxis: {
    ticks: [10000, 20000, 30000, 40000],
    gridlines: {
      color: "#fff",
    },
  },
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
