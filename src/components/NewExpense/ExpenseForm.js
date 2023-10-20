import React,{ useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm=()=>{

    const [enteredTitle, setEnteredTitle ]=useState('');
    const [enteredAMount, setEnteredAMount ]=useState('');
    const [enteredDate, setEnteredDate ]=useState('');


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler=(event)=>{
        setEnteredAMount(event.target.value)
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }



    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2020-01-03" max="2023-12-15" onChange={dateChangeHandler}/>
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>

            </div>
        </form>
    )
}


export default ExpenseForm