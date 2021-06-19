import "./date.sass";

export default function Date({ date }) {
  const [dayText, month, day, year] = date.toDateString().split(" ");
  return (
    <div className="date">
      <div className="date__month">{month}</div>
      <div className="date__year">{year}</div>
      <div className="date__day">{day}</div>
    </div>
  );
}
