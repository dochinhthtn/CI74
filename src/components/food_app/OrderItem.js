import React from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";

export default function OrderItem({ order, onIncreaseAmount, onDecreaseAmount }) {
    return (<Container>
        <Row>
            <Col sm={9}>
                <h3>{order.name}</h3>
                <div>
                    <Badge bg="primary" className="me-4">${order.price}</Badge>
                    <Badge bg="light" text="dark" className="me-4">x{order.amount}</Badge>
                </div>
            </Col>

            <Col>
                <Button variant="danger" size="sm" className="me-2" onClick={() => onDecreaseAmount(order)}>-</Button>
                <Button variant="primary" size="sm" onClick={() => onIncreaseAmount(order)}>+</Button>
            </Col>
        </Row>
    </Container>);
}