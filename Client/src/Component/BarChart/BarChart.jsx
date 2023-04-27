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

function BarChart() {
  const labels = [
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
    "Black",
    "Pink",
    "lop",
    "pop",
    "iuh",
    "uih",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81],
        backgroundColor: [
          "rgba(255, 99, 133, 0.74)",
          "rgba(255, 160, 64, 0.61)",
          "rgba(255, 204, 86, 0.61)",
          "rgba(75, 192, 192, 0.788)",
          "rgba(54, 163, 235, 0.774)",
          "rgba(153, 102, 255, 0.658)",
          "rgba(201, 203, 207, 0.74)",
          "rgba(99, 108, 129, 0.658)",
          "rgba(160, 187, 241, 0.575)",
          "rgba(173, 240, 201, 0.644)",
          "rgba(160, 158, 40, 0.603)",
          "rgba(209, 43, 173, 0.61)",
          "rgba(160, 187, 241, 0.575)",
          "rgba(173, 240, 201, 0.644)",
          "rgba(160, 158, 40, 0.603)",
          "rgba(112, 27, 94, 0.61)",
          "rgba(78, 110, 175, 0.575)",
          "rgba(30, 56, 41, 0.644)",
          "rgba(114, 112, 2, 0.603)",
          "rgba(163, 9, 130, 0.61)",
          "rgba(0, 67, 202, 0.575)",
          "rgba(58, 192, 114, 0.644)",
          "rgba(204, 202, 94, 0.603)",
          "rgba(138, 58, 120, 0.61)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    scales: {
      xAxes: [
        {
          type: "category",
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
        },
      ],
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
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "60vw", marginTop: "100px" }}>
      <Bar height={100} data={data} options={options} />
    </div>
  );
}

export default BarChart;
