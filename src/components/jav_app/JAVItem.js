import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
            {isEditing ? <Button variant="info" onClick={edit}>Lưu</Button> : <Button variant="warning" onClick={enableEdit}>Sửa</Button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={watch}>Xem</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <Button variant="danger" onClick={remove}>Xóa</Button>
            <button className="btn btn-danger" onClick={remove}>Xóa</button>
        </div>
    </div>);
}