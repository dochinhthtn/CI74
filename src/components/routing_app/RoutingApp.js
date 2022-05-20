import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./Navbar";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import ProductDetailPage from "./ProductDetailPage";
import GirlfriendPage from "./GirlfriendPage";

export default function RoutingApp() {

    return (
        <BrowserRouter>
            <div className="routing-app">

                <Navbar />

                <Container className="page-content">
                    <Routes>

                        
                        <Route path="*" element={<h2 className="text-danger">
                            Tôi năm nay hơn 70 tuổi mà tôi chưa thấy trang nào mà nó như này
                        </h2>} />

                        <Route path="/" element={<HomePage />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/login" element={<LoginPage />} />

                        {/* show danh sách sản phẩm */}
                        <Route path="/product" element={<ProductPage />} />
                        {/* xem chi tiết từng sản phẩm, tham số là id */}
                        <Route path="/product/:id" element={<ProductDetailPage />} />

                        {/* Nested route */}
                        {/* <Route path="/product" element={<ProductPage />}>
                            <Route path=":id" element={<ProductDetailPage />}/>
                        </Route> */}

                        <Route path="/girlfriend/:name/:age/:address" element={<GirlfriendPage />} />

                        {/* 
                            /girlfriend/Linh/28/HN => name = "Linh", age = "28", address = "HN"
                            /girlfriend/10/true/undefined => name = "10", age = "true", address = "undefined"
                        */}
                    </Routes>
                </Container>

            </div>
        </BrowserRouter>
    );
}