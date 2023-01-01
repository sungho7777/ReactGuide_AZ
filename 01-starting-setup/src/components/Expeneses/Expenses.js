import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filterYeared, setFilterYeared] = useState('2023');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
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
                {filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
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