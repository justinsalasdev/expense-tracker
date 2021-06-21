import "./spender.sass";
import { useState } from "react";
import Form from "./Form";

export default function Spender({ setExpenses }) {
  const [isActive, setActive] = useState(false);
  return (
    <div className="spender">
      {!isActive && (
        <button
          className="spender__action"
          type="button"
          onClick={() => setActive(true)}
        >
          ADD EXPENSE
        </button>
      )}
      {isActive && (
        <Form setExpenses={setExpenses} handleCancel={() => setActive(false)} />
      )}
    </div>
  );
}
