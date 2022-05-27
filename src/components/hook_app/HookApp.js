import React, { useState } from "react";
import CreateProductForm from "./CreateProductForm";

export default function HookApp() {

    const [products, setProducts] = useState([]);

    const [modal, setModal] = useState(true);

    const createProduct = (data) => {
        setModal(false);
        setProducts([...products, data]);
    }

        console.log(products);

    return (<div className="hook-app">
        <h1>Hướng dẫn về custom hook trong React</h1>
        <CreateProductForm onCreatedProduct={createProduct} />
    </div>);
}