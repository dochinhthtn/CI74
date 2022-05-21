import React from 'react';
import {Row, Col} from 'react-bootstrap';

import AsideLeft from './AsideLeft';
import MainContent from './MainContent';

export default function HomePage() {
    return (<Row>
        <Col lg={3} md={4} xs={12}><AsideLeft /></Col>
        <Col><MainContent data={data} /></Col>
    </Row>);
}