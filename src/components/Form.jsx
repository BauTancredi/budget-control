import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Error from "./Error";

const Form = ({ setNewExpense, setCreateExpense }) => {
  const [expense, setExpense] = useState({
    name: "",
    amount: 0,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      expense.amount < 1 ||
      isNaN(expense.amount) ||
      expense.name.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    expense.id = shortid.generate();

    setNewExpense(expense);
    setCreateExpense(true);
    setExpense({
      name: "",
      amount: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add expenses</h2>
      {error ? <Error message="Both fields are mandatory." /> : null}
      <div className="campo">
        <label>Expense</label>
        <input
          type="text"
          className="u-full-width"
          value={expense.name}
          onChange={(e) =>
            setExpense({
              ...expense,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="campo">
        <label>Amount</label>
        <input
          type="number"
          className="u-full-width"
          value={expense.amount}
          onChange={(e) =>
            setExpense({
              ...expense,
              amount: parseInt(e.target.value, 10),
            })
          }
        />
      </div>

      <input
        type="submit"
        value="Add"
        className="button-primary u-full-width"
      />
    </form>
  );
};

Form.propTypes = {
  setNewExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;
