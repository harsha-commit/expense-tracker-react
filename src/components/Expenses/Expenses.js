import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// Get year from ExpensesFilter to filter data
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredExpenses = props.items.filter(
    (expense) =>
      selectedYear === expense.date.toLocaleString("en-US", { year: "numeric" })
  );

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  // Display Chart + List
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ul>
          <ExpensesList items={filteredExpenses} />
        </ul>
      </Card>
    </div>
  );
}

export default Expenses;
