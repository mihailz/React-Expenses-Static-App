import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpenseItem from "./components/NewExpenseItem/NewExpenseItem";
import {useState} from "react";

const INITIAL_EXPENSES_STATE = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES_STATE);

    const onAddExpenseHandler = (newExpenseItem) => {
        setExpenses(prevState => {
            return [newExpenseItem, ...prevState];
        })
    }

    return (
        <div>
            <NewExpenseItem onAddExpenseItem={onAddExpenseHandler} />
            <Card className='expenses'>
                <h2>Expenses application</h2>
                <Expenses expenses={expenses}/>
            </Card>
        </div>

    );
}

export default App;
