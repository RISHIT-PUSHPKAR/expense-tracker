import "./App.css";
import React, { useState } from "react";
import FormContainer from "./Containers/Form_Container/FormContainer";
import ExpenseContainer from "./Containers/Expense_Container/ExpenseContainer";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";

function App() {
  let [expenses, setNewExpense] = useState([]);
  let [filteredExpenses, setFilter] = useState([]);

  let addExpense = (newExpense) => {
    setNewExpense(() => {
      return [newExpense, ...expenses];
    });
    filterExpenses([newExpense, ...expenses]);
  };

  let filterExpenses = (filteredList) => {
    setFilter(() => {
      return filteredList;
    });
  };

  const sortData = () => {
    let sortedData = filteredExpenses.sort((a, b) => {
      console.log(a.date.getTime());
      if (a.date.getTime() > b.date.getTime()) {
        return 1;
      } else if (a.date.getTime() < b.date.getTime()) {
        return -1;
      } else {
        return 0;
      }
    });

    filterExpenses([...sortedData]);
  };

  return (
    <>
      <div className="form-container">
        <FormContainer sendData={addExpense} expenseList={expenses} />
      </div>
      <div className="expenses-container">
        <ExpenseFilter
          expenses={expenses}
          filterExpenses={filterExpenses}
          sortData={sortData}
        />
        <ExpenseContainer items={filteredExpenses} />
      </div>
    </>
  );
}

export default App;
