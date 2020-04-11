import React, { Fragment } from "react";
import { reviewBudget } from "../helpers";

const BudgetControl = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className={reviewBudget(budget, remaining)}>
        Remaining: ${remaining}
      </div>
    </Fragment>
  );
};

export default BudgetControl;
