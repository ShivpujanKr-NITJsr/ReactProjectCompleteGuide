

import './AddExpenseButton.css'
import './NewExpense.css'
const AddExpenseButton = (props) => {


    const handle=()=>{
        props.fillForm()
    }



    return <div className='new-expense'>

            <button onClick={handle}>Add expense</button>
    
    </div>
}

export default AddExpenseButton