import "./expense.sass";
import Date from "../Date/Date";

export default function Expense({ date, text, amount, handleDelete }) {
  return (
    <div className="expense" onClick={handleDelete}>
      <Date date={date} />
      <div className="expense__description">
        <h2>{text}</h2>
        <div className="expense__price">{amount}</div>
      </div>
    </div>
  );
}
