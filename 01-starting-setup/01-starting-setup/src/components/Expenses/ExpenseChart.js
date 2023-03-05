import Chart from "../Chart/Chart";

function ExpenseChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (const expense of props.expenses){
    const expenseMonth = expense.date.getMonth(); //Gives an int 0-11
    chartDataPoints[expenseMonth].value+=expense.amount; //Updating the values of the labels in the chartDataPoints object
  }
  return <Chart dataPoints={chartDataPoints}/>; //Sending the data points to the Chart component
}

export default ExpenseChart;