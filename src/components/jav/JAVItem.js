import React from 'react';
import "../../css/JAVItem.css";

export default function JAVItem({ name, date, watched, id, onDeleteItem }) {

    const remove = (event) => {
        onDeleteItem(id);
    }

    return (<div className="jav-item">
        <div className="item-info">
            <b className="item-name">{name}</b>
            <i className="item-date">{date}</i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code>{watched ? 'watched' : ''}</code>
        </div>

        <div className="item-action">
            <button>Xem</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={remove}>Xóa</button>
        </div>
    </div>);
}