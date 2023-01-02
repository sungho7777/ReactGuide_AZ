import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
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
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}
export default Expenses;