import React from 'react';
import "../../css/JAVItem.css";

export default function JAVItem({ name, date, watched, id, onDeleteItem, onWatchItem, onEditItem }) {

    const remove = (event) => {
        onDeleteItem(id);
    }

    const watch = (event) => {
        onWatchItem(id);
    }

    const edit = (event) => {
        onEditItem(id);
    }

    return (<div className="jav-item">
        <div className="item-info">
            <b className="item-name">{name}</b>
            <i className="item-date">{date}</i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code>{watched ? 'watched' : ''}</code>
        </div>

        <div className="item-action">
            <button onClick={edit}>Sửa</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={watch}>Xem</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={remove}>Xóa</button>
        </div>
    </div>);
}