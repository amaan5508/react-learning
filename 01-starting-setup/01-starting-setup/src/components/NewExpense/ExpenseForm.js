import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //Title declaration and change function
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //Amount declaration and change function
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  //Date declaration and change function
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //Submit function; transferring data to NewExpense.js
  const submitHandler = (event) => {
    event.preventDefault(); //Prevents default behaviour(form is cleared and the page reloads); the browser automatically sends a request to the server
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); //Calling a function defined in NewExpense.js and passing the expenseData object as a parameter to send data over to the parent component (NewExpense.js)
    setEnteredAmount(""); // Resetting values
    setEnteredDate(""); // Resetting values
    setEnteredTitle(""); // Resetting values
    console.log(expenseData);
  };
  const cancelHandler = () => {
    setEnteredAmount(""); // Resetting values
    setEnteredDate(""); // Resetting values
    setEnteredTitle(""); // Resetting values
    props.onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
