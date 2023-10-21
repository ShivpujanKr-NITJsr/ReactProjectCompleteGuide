import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React,{ useState} from 'react'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
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