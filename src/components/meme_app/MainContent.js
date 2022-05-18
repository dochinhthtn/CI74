import React from 'react';
import { Form, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import MemeContainer from './MemeContainer';

export default function MainContent({ data }) {
    return (<Container fluid className="main-content">
        <Row>
            <Col>
                <h4>Meme List</h4>
            </Col>
            <Col>
                <Form className="search-meme-form">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Enter keyword to search" />
                        <Button type="submit" variant="primary">Search</Button>
                    </InputGroup>
                </Form>
            </Col>
        </Row>

        <Row className="meme-list mt-3">
            {data.map(memeData => <Col lg={4} md={6}>
                <MemeContainer
                    key={"meme-container-" + memeData.id}
                    {...memeData}
                />
            </Col>)}
        </Row>

    </Container>);
}