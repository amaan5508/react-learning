import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(datay) {
  const [enteredYear, setEnteredYear] = useState(1999); //Declaring year

  const saveEnteredYearHandler = (selectedYear) => { //Function to set the selected year to the entered year
    setEnteredYear(selectedYear);
  };

  const filteredExpenses = datay.expenses.filter((expense) => { //Getting a new array of expenses based on the year
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveEnteredYear={saveEnteredYearHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
