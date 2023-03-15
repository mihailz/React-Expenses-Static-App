import './ExpenseDate.css';

const ExpenseDate = props => {
    const expenseMonth = props.date.toLocaleDateString('en-US', {month: 'long'});
    const expenseYear = props.date.getFullYear();
    const expenseDay = props.date.toLocaleDateString('en-US', {day: '2-digit'});

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{expenseMonth}</div>
            <div className='expense-date__year'>{expenseYear}</div>
            <div className='expense-date__month'>{expenseDay}</div>
        </div>
    );
}

export default ExpenseDate;
