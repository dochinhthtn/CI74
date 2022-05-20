import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import productData from "../../data/product_data";
import ProductDetailPage from "./ProductDetailPage";

export default function ProductPage() {

    const [products, setProducts] = useState(productData);

    return (<div className="product-page">

        <h2>This is product page</h2>
        <ul className="product-list">
            {products.map(product => <li key={product.id}>
                <Link to={'/product/' + product.id}>{product.name}</Link>
            </li>)}
        </ul>
    </div>);
}