import React, { useState } from 'react';

import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPRNSES = [
  { id: 'e1', title: 'Car Insurance', amount: 250.49, date: new Date(2021, 7, 1) },
  { id: 'e2', title: 'New TV', amount: 56.20, date: new Date(2019, 3, 4) },
  { id: 'e3', title: 'Chips', amount: 2.54, date: new Date(2022, 2, 25) },
  { id: 'e4', title: 'Cake', amount: 1.26, date: new Date(2022, 6, 18) }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPRNSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
