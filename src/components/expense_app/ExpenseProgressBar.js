import React from "react";
import "../../css/ExpenseProgressBar.css";

export default function ExpenseProgressBar({ label, amount, maxAmount }) {

    const percentage = amount * 100 / maxAmount;

    return <div className="expense-progress-bar">
        <label>{label}</label>
        <div className="expense-progress">
            <div className="expense-current-progress" style={{ width: percentage + '%' }}></div>
        </div>
    </div>
}