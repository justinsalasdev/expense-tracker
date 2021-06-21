import "./form.sass";
import { useState } from "react";

export default function Form({ handleCancel, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, amount, date);
    setExpenses({
      type: "add",
      payload: { title, amount, date: new Date(date) }
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form__input"
        type="text"
        placeholder="title"
      />
      <input
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="form__input"
        type="text"
        placeholder="amount"
      />
      <input
        value={date}
        onChange={e => setDate(e.target.value)}
        className="form__date"
        type="date"
      />
      <button className="form__action">submit</button>
      <button className="form__cancel" onClick={handleCancel}>
        back
      </button>
    </form>
  );
}
function formatDate(date) {
  date.setDate(date.getDate() + 3);
  return date.toISOString().substr(0, 10);
}
