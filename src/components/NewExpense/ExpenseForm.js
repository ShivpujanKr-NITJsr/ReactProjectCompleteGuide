import React from 'react'

import './ExpenseForm.css'

const ExpenseForm=()=>{

    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }

    const amountHandler=(event)=>{
        console.log(event.target.value)
    }

    const dateHandler=(event)=>{
        console.log(event.target.value)
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
                    <input type='number' onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2020-01-03" max="2023-12-15" onChange={dateHandler}/>
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>

            </div>
        </form>
    )
}


export default ExpenseForm