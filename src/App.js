import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, newExpense]);

      const remainingBudget = remaining - newExpense.amount;
      setRemaining(remainingBudget);

      setCreateExpense(false);
    }
  }, [newExpense]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setNewExpense={setNewExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
