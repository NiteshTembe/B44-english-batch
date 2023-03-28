import { Chart } from "react-google-charts";

export const data = [
  ["TitleName", "Data"],
  ["Direct", 55],
  ["Referel", 30],
  ["Social", 15],
];

export const options = {
  pieHole: 0.8,
  is3D: false,
  legend: "none",
  pieSliceText: "none",
  slices: {
    0: { color: "#4e73df" },
    1: { color: "#1cc88a" },
    2: { color: "#36b9cc" },
  },
};

export function DonutChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
