import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes } from 'react-router-dom';
import memeData from '../../data/meme_data';
import AsideLeft from './AsideLeft';

import MainContent from './MainContent';
import Navbar from './Navbar';

export default function MemeApp() {

    const [data, setData] = useState(memeData); // dữ liệu ban đầu là memeData

    return (
    <BrowserRouter>
        <div className="meme-app">
            <Navbar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Container>
        </div>
    </BrowserRouter>);
}
