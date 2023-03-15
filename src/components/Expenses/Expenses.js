import './Expenses.css';
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2019');

    const onSelectYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.expenses
        .filter(expense => expense.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <ExpensesFilter selected={selectedYear} onSelectYear={onSelectYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses} />
        </div>
    );
}

export default Expenses;
