import React, { useState } from "react";
import "./InvestmentForm.css";
export default function InvestmentForm(props) {
  const [userInput, setUserInput] = useState({
    enteredCurrentSaving: "",
    enteredYearlySaving: "",
    enteredInterest: "",
    enteredDuration: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
        current_savings: userInput.enteredCurrentSaving,
        yearly_contribution: userInput.enteredYearlySaving,
        expected_return: userInput.enteredInterest,
        duration: userInput.enteredDuration,
      };
      props.onFormSubmit(formData);
    //   setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredCurrentSaving: "",
    //       enteredYearlySaving: "",
    //       enteredInterest: "",
    //       enteredDuration: "",
    //     };
    //   });
  };
  const formResetHandler = (event) => {
    event.preventDefault();
    setUserInput((prevState) => {
        return {
          ...prevState,
          enteredCurrentSaving: "",
          enteredYearlySaving: "",
          enteredInterest: "",
          enteredDuration: "",
        };
      });
    props.onFormReset();    
  };

  const onChangeHandler = (event, tag) => {
    if (tag === "current_saving") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredCurrentSaving: event.target.value,
        };
      });
    } else if (tag === "yearly_saving") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredYearlySaving: event.target.value,
        };
      });
    } else if (tag === "interest") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredInterest: event.target.value,
        };
      });
    } else {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredDuration: event.target.value,
        };
      });
    }
  };

  return (
    <form
      onReset={formResetHandler}
      onSubmit={formSubmitHandler}
      className="form"
    >
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.enteredCurrentSaving}
            onChange={(e) => onChangeHandler(e, "current_saving")}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.enteredYearlySaving}
            onChange={(e) => onChangeHandler(e, "yearly_saving")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.enteredInterest}
            onChange={(e) => onChangeHandler(e, "interest")}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.enteredDuration}
            onChange={(e) => onChangeHandler(e, "duration")}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
