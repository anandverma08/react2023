import React, { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import Table from "./components/Table/Table";

function App() {
  const [userInput, setUserInput] = useState(null);
  let initialSaving = 0;
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const resetHandler = () => {
    setUserInput(null);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current_savings"];
    initialSaving = +userInput["current_savings"];

    const yearlyContribution = +userInput["yearly_contribution"];
    const expectedReturn = +userInput["expected_return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <React.Fragment className="parent">
      <Header />

      <InvestmentForm onFormSubmit={calculateHandler} onFormReset={resetHandler}/>

      {yearlyData.length === 0 ? (
        <h2>Data will be displayed here!</h2>
      ) : (
        <Table yearlyData={yearlyData} initialSaving={initialSaving} />
      )}
    </React.Fragment>
  );
}

export default App;
