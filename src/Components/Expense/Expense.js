import "./expense.sass";
import Date from "../Date/Date";
import Card from "../Card/Card";

export default function Expense({ date, text, amount }) {
  return (
    <div className="expense">
      <Card>
        <Date date={date} />
      </Card>
      <div className="expense__description">
        <h2>{text}</h2>
        <div className="expense__price">{amount}</div>
      </div>
    </div>
  );
}
