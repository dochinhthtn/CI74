import React, { useEffect, useState } from "react";

export default function CountDown({ maxSeconds, onStop }) {

    const [current, setCurrent] = useState(maxSeconds);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('hello');
            if (current <= 0) {
                clearTimeout(timeout);
                // setCurrent(null);
                if (onStop) onStop();
                return;
            }

            setCurrent(current - 1);
        }, 1000); // sau 1 giây => đặt lại giá trị current

        // thu hồi timeout cũ
        return () => {
            clearTimeout(timeout);
        }
    }, [current]);

    const mins = Math.floor(current / 60);
    const secs = current % 60;

    return (<div className="count-down">
        Thời gian còn lại: {mins < 10 ? '0' + mins : mins}:{secs < 10 ? '0' + secs : secs} giây
    </div>);
}