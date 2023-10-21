import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React from 'react'

const Expenses=(props) =>{
  
  return (
    <Card className="expenses">
      {props.items.map((item)=>(
        <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}
      />
      ))

      }
      
      
      
    </Card>
  );
}

export default Expenses;