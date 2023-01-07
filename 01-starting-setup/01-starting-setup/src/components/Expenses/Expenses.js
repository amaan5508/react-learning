import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(datay) {

  return (
    <div>
      <ExpensesFilter />
    <Card className="expenses">
      <ExpenseItem
        title={datay.expenses[0].title}
        amount={datay.expenses[0].amount}
        date={datay.expenses[0].date}
      />
      <ExpenseItem
        title={datay.expenses[1].title}
        amount={datay.expenses[1].amount}
        date={datay.expenses[1].date}
      />
      <ExpenseItem
        title={datay.expenses[2].title}
        amount={datay.expenses[2].amount}
        date={datay.expenses[2].date}
      />
      <ExpenseItem
        title={datay.expenses[3].title}
        amount={datay.expenses[3].amount}
        date={datay.expenses[3].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;
