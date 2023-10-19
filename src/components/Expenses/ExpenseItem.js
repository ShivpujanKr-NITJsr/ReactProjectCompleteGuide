
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import React from 'react'

const ExpenseItem=(props) =>{
    


    return (
    <Card className='expense-item'>
        
        <ExpenseDate date={props.date}/>

        <ExpenseDetails amount={props.amount} title={props.title} loe={props.loe}/>
    </Card>
    )
}

export default ExpenseItem;