import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function BarChart({ data }) {
  const temp = [];
  data.forEach((element) => {
    if (element.cDate) {
      temp.push(element.cDate);
      console.log("DATAS : " + element.totalTime);
    }
  });

  const labels = temp;

  const temp1 = [];
  data.forEach((element) => {
    if (element.totalTime) {
      temp1.push(element.totalTime);
      console.log("DATAS total time : " + element.totalTime);
    }
  });

  const dataset = {
    // label: `Total Time(${[...temp1]})`,
    data: temp1,
    backgroundColor: [
      "rgba(42, 162, 231, 0.61)",
      "rgba(149, 207, 229, 0.61)",
      // "rgba(59, 92, 105, 0.61)",
    ],
    borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
    borderWidth: 1,
  };

  const chartData = {
    labels: labels,
    datasets: [dataset],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: false,
      },
      y: {
        type: "category",
        labels: temp1,
        reverse: true,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.dataset.data[context.dataIndex];
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <Bar
      style={{ width: "60vw", marginTop: "100px" }}
      data={chartData}
      options={options}
      height={100}
    />
  );
}

export default BarChart;
