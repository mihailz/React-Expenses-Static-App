import './NewExpenseItem.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpenseItem = props => {

    const [isEditing, setIsEditing] = useState(false);

    const onFormSubmit = (expenseItem) => {
        const newExpense = {
            ...expenseItem,
            id: Math.random()
        }

        props.onAddExpenseItem(newExpense);
        exitFromEditMode();
    }

    const enterInEditMode = () => {
        setIsEditing(true);
    }

    const exitFromEditMode = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={enterInEditMode}>Add new expense</button>}
            {isEditing && <ExpenseForm onFormCancel={exitFromEditMode} onFormSubmitHandler={onFormSubmit} />}
        </div>
    );
}

export default NewExpenseItem;
