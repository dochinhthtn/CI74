import React from 'react';
import ExpenseProgressBar from './ExpenseProgressBar';

const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ExpenseChart({ data }) {
    // tính tổng số tiền của từng tháng trong bộ dữ liệu
    let result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };
    for (let item of data) { // item là đối tượng = id + name + date + amount
        let dateObject = new Date(item.date);
        let month = dateObject.getMonth() + 1; // do tháng trong js bắt đầu từ tháng 0

        if (result[month]) { // nếu tồn tại thuộc tính trong result
            result[month] += item.amount;
        } else {
            result[month] = item.amount;
        }
    }

    const months = Object.values(result);
    const maxAmount = Math.max(...months);

    // hiển thị biểu đồ
    return <div className="expense-chart">
        <h3>Đây là biểu đồ, lát nữa cài đặt sau</h3>
        {months.map((amount, index) => <ExpenseProgressBar label={monthShortNames[index]} amount={amount} maxAmount={maxAmount} />)}
    </div>
}