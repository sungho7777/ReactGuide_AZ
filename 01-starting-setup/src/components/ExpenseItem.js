import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div>2022.10.29</div>
            <div className='expense-item__description'>
                <h2>santnfe</h2>
                <div className='expense-item__price'>$200.21</div>
            </div>
        </div>
    );
} 

export default ExpenseItem;