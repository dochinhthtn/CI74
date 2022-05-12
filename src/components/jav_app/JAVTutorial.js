import React, { useState } from "react";
import JAVCreateForm from "./JAVCreateForm";
import JAVItem from "./JAVItem";

export default function JAVTutorial() {

    const [data, setData] = useState([
        { id: 1, name: 'JAV001', date: '2022/05/06', watched: true },
        { id: 2, name: 'JAV002', date: '2022/05/07', watched: false },
        { id: 3, name: 'JAV003', date: '2022/05/08', watched: false },
    ]);

    // tạo item
    const addItem = (name) => {
        const newItem = {
            id: Date.now(),
            name: name,
            date: new Date().toISOString(),
            watched: false
        };

        const newData = [...data, newItem];
        setData(newData);
    }

    // xóa item: tạo 1 mảng mới gồm các phần tử của mảng cũ mà không chứa phần tử có id là "itemId"
    const deleteItem = (itemId) => {
        const newData = data.filter(item => item.id != itemId);
        setData(newData);
    }

    // bản chất: update giá trị watch của phần tử có id là "itemId"
    const watchItem = (itemId) => {
        const newData = [...data];
        for (let item of data) {
            if (item.id == itemId) item.watched = true;
        }
        setData(newData); // phải tạo 1 mảng mới, ko sửa đổi vào mảng cũ 
    }

    const editItem = (itemId, newName) => {
        const newData = [...data];
        for (let item of data) {
            if (item.id == itemId) item.name = newName;
        }
        setData(newData);
    }

    return (<div className="jav-tutorial">
        <h1>Japanese Anti Virus</h1>
        <JAVCreateForm onAddItem={addItem} />


        <div className="jav-list">
            {/* Truyền gì vào props cũng đc */}
            {data.map(jav => {
                return <JAVItem
                    key={jav.id}
                    
                    id={jav.id}
                    name={jav.name}
                    date={jav.date}
                    watched={jav.watched}

                    onDeleteItem={deleteItem}
                    onWatchItem={watchItem}
                    onEditItem={editItem}
                />
            })}
        </div>

    </div>);
}

// CRUD = create + read + update + delete