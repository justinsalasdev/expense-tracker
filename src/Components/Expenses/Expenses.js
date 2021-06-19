import "./expenses.sass";
import Expense from "../Expense/Expense";
import Filter from "../Filter/Filter";
import { useState } from "react";

const expenses = [
  {
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2020, 2, 28)
  },
  {
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28)
  },
  {
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2019, 2, 28)
  },
  {
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2022, 11, 28)
  }
];

export default function Expenses() {
  const [year, setYear] = useState("");

  function filter(expense) {
    if (!year) {
      return true;
    } else {
      return expense.date.getFullYear() === +year;
    }
  }

  console.log(year);
  return (
    <>
      <Filter year={year} setYear={setYear} />
      <ul className="expenses">
        {expenses.filter(filter).map(({ title, amount, date }, index) => {
          return (
            <Expense key={index} text={title} amount={amount} date={date} />
          );
        })}
      </ul>
    </>
  );
}
