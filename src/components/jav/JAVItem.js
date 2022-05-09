import React, { useState } from 'react';
import "../../css/JAVItem.css";

export default function JAVItem({ name, date, watched, id, onDeleteItem, onWatchItem, onEditItem }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const remove = (event) => {
        onDeleteItem(id);
    }

    const watch = (event) => {
        onWatchItem(id);
    }

    const edit = (event) => {
        onEditItem(id, newName);

        setIsEditing(false);
        setNewName('');
    }

    const enableEdit = () => {
        console.log("Chuyển javitem " + id + " sang chế độ sửa");
        setIsEditing(true);
    }

    const changeNewName = (event) => {
        setNewName(event.target.value);
    }

    return (<div className="jav-item">
        <div className="item-info">
            {
                isEditing
                    ? <div><input type="text" defaultValue={name} onChange={changeNewName} /></div>
                    : <b className="item-name">{name}</b>
            }
            <i className="item-date">{date}</i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code>{watched ? 'watched' : ''}</code>
        </div>

        <div className="item-action">
            {isEditing ? <button onClick={edit}>Lưu</button> : <button onClick={enableEdit}>Sửa</button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={watch}>Xem</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={remove}>Xóa</button>
        </div>
    </div>);
}