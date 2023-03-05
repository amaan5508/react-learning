import "./ExpenseDate.css";

function ExpenseDate(datax) {
  const month = datax.date.toLocaleString("en-UK", { month: "long" });//Extracting month
  const year = datax.date.getFullYear();//Extracting year
  const day = datax.date.toLocaleString("en-UK", { day: "2-digit" });//Extracting day
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
