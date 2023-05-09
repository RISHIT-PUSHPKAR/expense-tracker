import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expenseAmount, setExpenseAmount] = useState("");
  // const [expenseDate, setExpenseDate] = useState("");

  const [userInput, setUserInput] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const titleHandler = (event) => {
    setUserInput((prevInput) => {
      return { ...prevInput, expenseTitle: event.target.value };
    });
  };

  const amountHandler = (event) => {
    setUserInput((prevInput) => {
      return { ...prevInput, expenseAmount: event.target.value };
    });
  };

  const dateHandler = (event) => {
    setUserInput((prevInput) => {
      return { ...prevInput, expenseDate: event.target.value };
    });
  };

  // const titleHandler = (event) => {
  //   setExpenseTitle(event.target.value);
  // };

  // const amountHandler = (event) => {
  //   setExpenseAmount(event.target.value);
  // };

  // const dateHandler = (event) => {
  //   setExpenseDate(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: userInput.expenseTitle,
      amount: userInput.expenseAmount,
      date: new Date(userInput.expenseDate),
    };

    console.log(expenseData.date.getDay());
    props.getData(expenseData);

    setUserInput({
      expenseTitle: "",
      expenseAmount: "",
      expenseDate: "",
    });
  };

  return (
    <div className="form-container">
      <div className="heading-text-container">
        <h1 className="heading-text">Expense Tracker</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-title">
          <label>Title</label>
          <input
            type="text"
            onChange={titleHandler}
            required
            placeholder="For eg. Grocery"
            value={userInput.expenseTitle}
          />
        </div>
        <div className="form-amount">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountHandler}
            required
            placeholder="For eg. 100 rs"
            min="1"
            value={userInput.expenseAmount}
          />
        </div>
        <div className="form-date">
          <label>Date</label>
          <input
            type="date"
            onChange={dateHandler}
            className="input-date"
            required
            value={userInput.expenseDate}
          />
        </div>
        <div className="form-btn-container">
          <button type="submit" className="form-btn">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
