import React from "react";
import "./Table.css";
export default function Table(props) {
    console.log(props.yearlyData)
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
       
          {props.yearlyData.map((yearData) => {
            return (
                <tr>
              <td>{yearData.year}</td>
              <td>${yearData.savingsEndOfYear.toFixed(2)}</td>
              <td>{yearData.yearlyInterest.toFixed(2)}</td>
              <td>{yearData.savingsEndOfYear.toFixed(2) - props.initialSaving.toFixed(2) - yearData.yearlyContribution.toFixed(2)*yearData.year.toFixed(2)}</td>
              <td>{props.initialSaving + yearData.yearlyContribution*yearData.year}</td>
              </tr>
            )
          })}
       
      </tbody>
    </table>
  );
}
