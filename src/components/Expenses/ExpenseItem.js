
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import React from 'react'

const ExpenseItem = (props) => {

    let title=props.title;
    const clickHandler = () => {
        console.log('Clicked!!!!!!')
        // alert('Clicked!!!!!!')
        
    }
    const deleteHandler=()=>{
        alert('delete impementation is incomplete')
    }
    return (
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />

            <ExpenseDetails amount={props.amount} title={title} location={props.location} />

            <button onClick={clickHandler}>change title</button>
            <button onClick={deleteHandler}>delete</button>
            
        </Card>
    )
}

export default ExpenseItem;