import React from "react";
import PropTypes from "prop-types";
import Expense from "./Expense";

const List = ({ expenses }) => {
  return (
    <div className="gastos-realizados">
      {expenses.map((expense) => (
        <Expense expense={expense} key={expense.id} />
      ))}
    </div>
  );
};

List.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default List;
