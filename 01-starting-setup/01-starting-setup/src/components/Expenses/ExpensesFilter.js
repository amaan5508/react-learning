import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onSaveEnteredYear(event.target.value); //Calling a function defined in Expenses.js and passing the selected year as a parameter to send data over to the parent component (Expenses.js)
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear}onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
