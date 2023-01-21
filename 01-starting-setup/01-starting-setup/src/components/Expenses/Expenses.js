import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(datay) {
  const [enteredYear, setEnteredYear] = useState(1999);
  const saveEnteredYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = datay.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredYear}
          onSaveEnteredYear={saveEnteredYearHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
