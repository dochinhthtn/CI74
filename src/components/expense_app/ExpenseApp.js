import React, { useState } from 'react';

import expenseData from '../../data/expense_data';
import CreateExpenseForm from './CreateExpenseForm';
import ExpenseChart from './ExpenseChart';
import ExpenseItem from './ExpenseItem';

export default function ExpenseApp() {
    const [data, setData] = useState(expenseData);
    const [filterYear, setFilterYear] = useState(2022);

    const createExpense = (name, amount, date) => {
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount,
            date: date
        };
        // const newData = [...data, newExpense];
        // setData(newData);
        setData([...data, newExpense]);

        const dateObject = new Date(date);
        setFilterYear(dateObject.getFullYear());

    }

    const result = data.filter(item => {
        let date = new Date(item.date);
        return filterYear == date.getFullYear();
    });

    console.log(result);

    return (<div className="expense-app">
        <CreateExpenseForm onCreateExpense={createExpense} />
        <div className="expense-content">
            <div className="expense-filter">
                <span>Filter by year</span>
                <select value={filterYear} onChange={(event) => setFilterYear(event.target.value)}>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
            </div>

            <ExpenseChart data={result} />

            <div className="expense-list">
                {result.map(item => <ExpenseItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    date={item.date}
                />)}
            </div>
        </div>

    </div>);
}