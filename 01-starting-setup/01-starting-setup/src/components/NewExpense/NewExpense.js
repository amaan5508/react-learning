import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [btnClicked, setBtnClicked] = useState(false);
  //Function to retrieve data from ExpenseForm.js and send it over to App.js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData); //Calling a function defined in App.js and passing the expenseData object as a parameter to send data over to the parent component (App.js)
    console.log(expenseData);
  };
  const cancelNewExpenseHandler = () => {
    setBtnClicked(false);
  };
  const addNewExpenseHandler = () => {
    setBtnClicked(true);
  };
  if (btnClicked === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelNewExpenseHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
