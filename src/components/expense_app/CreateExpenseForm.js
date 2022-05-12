import React, { useState } from 'react';

export default function CreateExpenseForm({ onCreateExpense }) {

    const [editable, setEditable] = useState(false);

    const [newName, setNewName] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const handleCreateExpense = (event) => {
        event.preventDefault();

        if (!newName || !newAmount || !newDate) {
            alert("Please input all fields");
            return;
        }
        
        onCreateExpense(newName, newAmount, newDate);

        event.target.reset();
        setEditable(false);
    }


    return (<form onSubmit={handleCreateExpense} className="create-expense-form">
        {!editable && <div className="open-expense-form">
            <button type="button" onClick={() => setEditable(true)}>ADD NEW EXPENSE</button>
        </div>}

        {editable && <div>
            <div className="input-group">
                <label>Name</label>
                <input type="text" onChange={(event) => setNewName(event.target.value)}/>
            </div>

            <div className="input-group">
                <label>Amount</label>
                <input type="number" onChange={(event) => setNewAmount(event.target.value)}/>
            </div>

            <div className="input-group">
                <label>Date</label>
                <input type="date"  onChange={(event) => setNewDate(event.target.value)}/>
            </div>

            <div className="actions">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setEditable(false)}>Cancel</button>
            </div>
        </div>}

    </form>);
}