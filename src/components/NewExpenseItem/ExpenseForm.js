import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = props => {

    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const onTitleChangeHandler = event => {
        setExpenseTitle(event.target.value);
    }

    const onAmountChangeHandler = event => {
        setExpenseAmount(event.target.value)
    }

    const onDateChangeHandler = event => {
        setExpenseDate(event.target.value);
    }

    const onSubmitFormHandler = (event) => {

        event.preventDefault();

        const newExpenseItem = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: new Date(expenseDate)
        }

        props.onFormSubmitHandler(newExpenseItem);

        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
    }

    return (
        <form onSubmit={onSubmitFormHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={onTitleChangeHandler}
                           type='text'
                           value={expenseTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                           step='0.01'
                           min='0.01'
                           onChange={onAmountChangeHandler}
                           value={expenseAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                           min='2019-01-01'
                           max='2023-12-31'
                           onChange={onDateChangeHandler}
                           value={expenseDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onFormCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
