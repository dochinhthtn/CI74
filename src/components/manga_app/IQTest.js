import React, { useState } from 'react';

export default function IQTest() {

    const [iq, setIQ] = useState(); // iq: lưu 1 số, setIQ: là 1 function để cập nhật iq
    const [person, setPerson] = useState({ name: 'Chinh Do', address: 'Thai Binh', job: 'Dev' });

    const showIQ = () => {
        let newIq = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        setIQ(newIq);
    }

    const changeJob = () => {
        setPerson({
            name: person.name,
            address: person.address,
            job: "Tester"
        }); // để cập nhật lại giao diện => truyền vào đây 1 object mới

        setPerson({ ...person, job: "Tester" }); // { name:t ..., address: ..., job: ..., job: "Test" }
    }

    return (<div className="iq-test">
        <h3>IQ của bạn là: <i>{iq}</i></h3>
        <button onClick={showIQ}>Test IQ</button>

        <h3>Person:</h3>
        <div>Name: {person.name}</div>
        <div>Address: {person.address}</div>
        <div>Job: {person.job}</div>
        <button onClick={changeJob}>Click to change something</button>
    </div>);
}