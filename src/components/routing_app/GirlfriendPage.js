import React from "react";
import { useParams } from "react-router-dom";

export default function GirlfriendPage() {

    const { name, age, address } = useParams();

    return (<div className="girlfriend-page">
        <h2>Gái gú gì tầm này 🤣🤣</h2>
        <div>Tên: {name}</div>
        <div>Tuổi: {age}</div>
        <div>Địa chỉ: {address}</div>
    </div>);
}