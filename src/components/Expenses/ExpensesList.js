import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

    return (
        props.expenses.map((expense) =>
            <ExpenseItem
                id={expense.id}
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    );

}

export default ExpensesList;
