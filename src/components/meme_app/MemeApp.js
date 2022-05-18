import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import memeData from '../../data/meme_data';
import AsideLeft from './AsideLeft';

import MainContent from './MainContent';
import Navbar from './Navbar';

export default function MemeApp() {

    const [data, setData] = useState(memeData); // dữ liệu ban đầu là memeData

    return (<div className="meme-app">
        <Navbar />

        <Container fluid>
            <Row>
                <Col lg={3} md={4} xs={12}><AsideLeft /></Col>
                <Col><MainContent data={data} /></Col>
            </Row>
        </Container>
    </div>);
}