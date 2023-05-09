// import React, { useState } from "react";
import "../ExpenseFilter/ExpenseFilter.css";
// import ExpenseCard from "../ExpenseCard/ExpenseCard";

const ExpenseFilter = (props) => {
  function fnc(event) {
    if (event.target.value === "") {
      props.filterExpenses(props.expenses);
      return;
    }

    const filteredYearArray = props.expenses.filter((ele) => {
      return Number(event.target.value) === ele.date.getFullYear();
    });

    props.filterExpenses(filteredYearArray);
  }

  const monthHandler = (e) => {
    const filteredMonthArray = props.expenses.filter((ele) => {
      return (
        e.target.value === ele.date.toLocaleString("default", { month: "long" })
      );
    });
    props.filterExpenses(filteredMonthArray);
  };

  const sortHandler = () => {
    props.sortData();
  };

  return (
    <div className="filter-container">
      <button type="reset" className="reset-btn" onClick={fnc} value="">
        Reset
      </button>
      <span className="select-year">
        <label id="year" style={{ color: "#021b79", fontWeight: 500 }}>
          Year :{" "}
        </label>
        <select name="year" id="yearList" className="year-list">
          <option onClick={fnc} value="2023">
            2023
          </option>
          <option onClick={fnc} value="2024">
            2024
          </option>
          <option onClick={fnc} value="2025">
            2025
          </option>
          <option onClick={fnc} value="2026">
            2026
          </option>
        </select>
      </span>
      <span className="select-month">
        <label id="month" style={{ color: "#021b79", fontWeight: 500 }}>
          Month :{" "}
        </label>
        <select name="month" id="month" className="month-list">
          {/* {filteredMonthArray.length === 0 && "No Expenses"} */}
          <option onClick={monthHandler} value="January">
            January
          </option>
          <option onClick={monthHandler} value="March">
            March
          </option>
          <option onClick={monthHandler} value="February">
            February
          </option>
          <option onClick={monthHandler} value="April">
            April
          </option>
          <option onClick={monthHandler} value="May">
            May
          </option>
          <option onClick={monthHandler} value="June">
            June
          </option>
          <option onClick={monthHandler} value="July">
            July
          </option>
          <option onClick={monthHandler} value="August">
            August
          </option>
          <option onClick={monthHandler} value="September">
            September
          </option>
          <option onClick={monthHandler} value="October">
            October
          </option>
          <option onClick={monthHandler} value="November">
            November
          </option>
          <option onClick={monthHandler} value="December">
            December
          </option>
        </select>
      </span>
      <button type="button" className="sort-btn" onClick={sortHandler}>
        &#10607;
      </button>
    </div>
  );
};

export default ExpenseFilter;
