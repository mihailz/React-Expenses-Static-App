import './ExpensesFilter.css';

const ExpensesFilter = props => {


    const years = ['2019', '2020', '2021', '2022', '2023'];

    const onSelectYearHandler = (event) => {
        props.onSelectYear(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Pick a year</label>
                <select value={props.selected} onChange={onSelectYearHandler}>
                    {
                        years.map((year, index) => {
                            return <option value={year} key={year}>{year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;
