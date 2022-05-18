import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./Navbar";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";

export default function RoutingApp() {

    return (
        <BrowserRouter>
            <div className="routing-app">

                <Navbar />

                <Container className="page-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </Container>

            </div>
        </BrowserRouter>
    );
}