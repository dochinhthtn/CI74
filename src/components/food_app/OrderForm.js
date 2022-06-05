import React, { useState } from "react";
import { Badge, Button, Form, ListGroup, Modal } from "react-bootstrap";
import OrderItem from "./OrderItem";

export default function OrderForm({ orders, onIncreaseAmount, onDecreaseAmount }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [readyToOrder, setReadyToOrder] = useState(false);

    let totalItems = 0;
    let totalPrice = 0;
    for (let order of orders) {
        totalItems += order.amount;
        totalPrice += order.price * order.amount;
    }

    return <div className="order-form">
        <Button variant="info" onClick={() => setIsModalOpen(true)}>
            <span className="me-2">Your cart</span>
            <Badge pill bg="light" text="dark">{totalItems}</Badge>
        </Button>

        <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
            <Modal.Header closeButton>
                Your cart
            </Modal.Header>
            <Modal.Body>

                <ListGroup>
                    {orders.map(order => <ListGroup.Item>
                        <OrderItem order={order} onIncreaseAmount={onIncreaseAmount} onDecreaseAmount={onDecreaseAmount} />
                    </ListGroup.Item>)}
                </ListGroup>

                <b className="text-danger mt-3">Total price: {totalPrice}</b>

                <Form className="mt-3" hidden={!readyToOrder}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {
                    readyToOrder
                        ? <Button variant="success">Order now</Button>
                        : <Button variant="success" onClick={() => setReadyToOrder(true)}>Make an order</Button>
                }
            </Modal.Footer>
        </Modal>

    </div>
}