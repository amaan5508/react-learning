import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(datay) {

  return (
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
  );
}

export default Expenses;
