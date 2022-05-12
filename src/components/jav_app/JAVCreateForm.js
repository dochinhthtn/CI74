import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// onAddItem là 1 function, gọi ở chỗ nào
// onAddItem = addItem ở bên Tutorial
export default function JAVCreateForm({ onAddItem }) {

    const [name, setName] = useState();

    const handleCreateItem = (event) => {
        event.preventDefault();

        if (!name) {
            alert("Nhập vào tên");
            return;
        }

        onAddItem(name); // addItem(name)
    }

    return (<form onSubmit={handleCreateItem}>
        <Form.Control type="text" onChange={(event) => setName(event.target.value)} />
        <Button variant="primary" type="submit">Thêm</Button>
    </form>);
}