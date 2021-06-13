import React from "react";
import "./LineGraph.css";
import { Line } from "react-chartjs-2";

// Presents the graph
const LineGraph = ({ bitcoinPrices, currencyType }) => {
  // Setting the graph data by type of currency
  const data = [
    {
      x: 0,
      y:
        currencyType === "dollar"
          ? bitcoinPrices.openUSD
          : bitcoinPrices.openILS,
    },
    {
      x: 1,
      y:
        currencyType === "dollar" ? bitcoinPrices.lowUSD : bitcoinPrices.lowILS,
    },
    {
      x: 2,
      y:
        currencyType === "dollar"
          ? bitcoinPrices.highUSD
          : bitcoinPrices.highILS,
    },
    {
      x: 3,
      y:
        currencyType === "dollar"
          ? bitcoinPrices.closeUSD
          : bitcoinPrices.closeILS,
    },
  ];

  return (
    <div className="linegraph">
      <Line
        data={{
          datasets: [
            {
              type: "line",
              backgroundColor: "black",
              borderColor: "#5AC53B",
              borderWidth: 2,
              pointBorderColor: "rgba(0, 0, 0, 0)",
              pointBackgroundColor: "rgba(0, 0, 0, 0)",
              pointHoverBackgroundColor: "#5AC53B",
              pointHoverBorderColor: "#000000",
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
              data: data,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          //Displaying
          legend: {
            display: false,
          },
          // Hover
          tooltips: {
            mode: "index",
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  format: "MM/DD/YY",
                  tooltipFormat: "ll",
                },
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
