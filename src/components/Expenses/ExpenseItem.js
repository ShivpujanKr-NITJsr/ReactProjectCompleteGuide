
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import React, { useState } from 'react'

const ExpenseItem = (props) => {

    const [title, setTitle] =useState(props.title)
    const [amount,setAmount] =useState(props.amount)

    console.log('evaluated expense item by React')
   
    const clickHandler = () => {
        // alert('Clicked!!!!!!')
        setTitle('Updated')

        console.log(title)
    }
    const amountHandler=()=>{
        setAmount(100)
        console.log(amount)
       
    }
    return (
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />

            <ExpenseDetails amount={amount} title={title} location={props.location} />

            <button onClick={clickHandler}>change title</button>
            <button onClick={amountHandler}>change amount</button>
            
        </Card>
    )
}

export default ExpenseItem;