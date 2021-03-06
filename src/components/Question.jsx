import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }

    setError(false);

    setBudget(amount);
    setRemaining(amount);
    setShowQuestion(false);
  };

  return (
    <Fragment>
      <h2>Place your budget</h2>
      {error ? <Error message="The budget is incorrect" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Place your budget"
          onChange={handleChange}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set budget"
        />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Question;
