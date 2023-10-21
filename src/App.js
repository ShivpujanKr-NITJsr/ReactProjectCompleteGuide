import React, { useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
import AddExpenseButton from './components/NewExpense/AddExpenseButton'

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
     
    },
  ];
  // let flag=true;
  const [expenseValue,setExpense] = useState(expenses)
  const [flag,setFlag] = useState(true)
  const addExpenseHandler= expense=>{
    console.log('In App.js');
    // console.log(expense)
    // expenses.unshift(expense)
    // console.log(expenses)
    
    setExpense((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
    setFlag(true)
  }
  // return React.createElement(
  //   'div',
  //   {},
    // React.createElement('h2',{},'let\'s get started'),
    // React.createElement(Expenses,{items:expenses})
   

  // )

  const cancelFormNow=()=>{
    setFlag(true)
  }
  let show=<NewExpense onAddExpense={addExpenseHandler} cancelFormBtn={cancelFormNow}/>

  const fillForm=()=>{
    setFlag(false);
  }
  if(flag){
    show=<AddExpenseButton fillForm={fillForm}/>
  }
  return (
    <div>
      {show}
      <Expenses items={expenseValue} />
    </div>
  );
}

export default App;