import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React,{ useState} from 'react'
import ExpensesFilter from './ExpensesFilter';

import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(item=>{
    return item.date.getFullYear().toString()=== filteredYear;
  })

  let expenseContent=<p> No expenses found</p>

  if(filteredExpenses.length>0){
    expenseContent=filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}
      />))
  }
  return (
    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      <ExpensesChart expenses={filteredExpenses} />
      {expenseContent}
      
      {filteredExpenses.length===1 && <p>Only single Expense here. Please add more...</p>}

      


    </Card>
  );
}

export default Expenses;