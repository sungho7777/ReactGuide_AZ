import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilterYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filterYear}
                    onChangeFilter={filterChangeHandler} />
                {props.items.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))};

            </Card>
        </div>
    );
}
export default Expenses;