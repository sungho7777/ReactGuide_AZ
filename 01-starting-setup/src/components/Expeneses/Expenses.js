import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
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

    let expensesContent = <p>No expense found.</p>;
    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        ));
    }
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filterYeared}
                    onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    );
}
export default Expenses;