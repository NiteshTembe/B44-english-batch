import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["month", "Profit"],
  ["Jan", 4515],
  ["Feb", 5312],
  ["Mar", 6251],
  ["Apr", 7841],
  ["May", 9821],
  ["Jun", 14984],
];

export const options = {
  legend: "none",
  animation: { startup: true, duration: 1500, easing: "out" },
  vAxis: {
    ticks: [5000, 10000, 15000, 20000],
    gridlines: {
      color: "#fff",
    },
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
