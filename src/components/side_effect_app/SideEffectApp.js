import React, { useEffect, useState } from "react";

export default function SideEffectApp() {
    const [newTitle, setNewTitle] = useState('Tiêu đề trang');
    const [aNumber, setANumber] = useState(0);
    const [bNumber, setBNumber] = useState(0);

    // sau khi component render lần đầu tiên => thực hiện function trong useEffect
    // gọi api ở đây
    useEffect(() => {
        console.log("Chạy 1 lần thôi");
    }, []);

    // sau khi component render => thực hiện function trong useEffect
    // không nên gọi api ở đây
    useEffect(() => {
        const handleScroll = () => {
            const position = document.documentElement.scrollTop;
            console.log("scrolling position: ", position);
        }

        document.addEventListener("scroll", handleScroll)

        // thu hồi lại bộ nhớ
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })

    // khi giá trị newTitle thay đổi => thực thi function trong useEffect
    // gọi api ở đây
    useEffect(() => {
        // title thay đổi => làm tác vụ nặng
        document.title = newTitle;
        console.log("Thực hiện 1 tác vụ siêu nặng, mất 30s");

    }, [newTitle]);

    // trước khi component bị gỡ -> chạy function trong useEffect
    useEffect(() => {
        // title thay đổi => làm tác vụ nặng
        document.title = newTitle;
        console.log("Thực hiện 1 tác vụ siêu nặng, mất 30s");

    }, 0);

    // khi giá trị aNumber hoặc bNumber thay đổi => thực thi function trong useEffect
    useEffect(() => {
        console.log("A number: " + aNumber);
        console.log("B number: " + bNumber);
        // khi 2 số a, b thay đổi => cũng làm 1 tác vụ nặng
        console.log("Thực hiện 1 tác vụ, mất 1 phút");
    }, [aNumber, bNumber]);

    return (<div className="side-effect-app">
        <input type="text" placeholder="Nhập tiêu đề trang web" onChange={(event) => setNewTitle(event.target.value)} />
        <br />
        <br />
        <input type="number" placeholder="Nhập vào a" onChange={(event) => setANumber(Number(event.target.value))} />
        +
        <input type="number" placeholder="Nhập vào b" onChange={(event) => setBNumber(Number(event.target.value))} />
        <br />
        Tổng của a và b là: {aNumber + bNumber}
    </div>);
}