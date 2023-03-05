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
    setBtnClicked(false); //When it's set to false, the if statement below doesn't run but since the entire component is updated it returns the default state
  };

  const addNewExpenseHandler = () => {
    setBtnClicked(true); //Self explanatory
  };
  
  if (btnClicked === true) {
    //Rendering the expense form component after the user clicks the Add New Expense button
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
