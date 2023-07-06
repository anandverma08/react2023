import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  const dps = props.dataPoints.map((dp) => {
    return dp.value;
  });
  const totalMax = Math.max(...dps);
  console.log(props.dataPoints, dps);
  return (
    <div className="chart">
      

      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}

      
    </div>
  );
}
