import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const onSaveExpendseDataHandler = (eData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...eData,
    };

    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpendseDataHandler} />
    </div>
  );
}
