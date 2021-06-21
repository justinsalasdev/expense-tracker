import "./expenses.sass";
import Expense from "../Expense/Expense";
import Filter from "../Filter/Filter";
import Spender from "../Spender/Spender";
import { useReducer, useState } from "react";
import reducer from "./reducer";

const initialExpenses = [
  {
    title: "Ice cream",
    amount: "300.67",
    date: new Date(2020, 2, 28)
  },
  {
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28)
  },
  {
    title: "Villa",
    amount: "200.67",
    date: new Date(2019, 2, 28)
  },
  {
    title: "Furniture",
    amount: "100.67",
    date: new Date(2022, 11, 28)
  }
];

export default function Expenses() {
  const [year, setYear] = useState("");
  const [expenses, setExpenses] = useReducer(reducer, initialExpenses);

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
      <Spender setExpenses={setExpenses} />
      <Filter year={year} setYear={setYear} />
      <ul className="expenses">
        {expenses.filter(filter).map(({ title, amount, date }, index) => {
          return (
            <Expense
              handleDelete={() =>
                setExpenses({ type: "delete", payload: index })
              }
              key={index}
              text={title}
              amount={amount}
              date={date}
            />
          );
        })}
      </ul>
    </>
  );
}
