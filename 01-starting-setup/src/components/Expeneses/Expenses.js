import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filterYeared, setFilterYeared] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilterYeared(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYeared;
    });
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filterYeared}
                    onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}
export default Expenses;