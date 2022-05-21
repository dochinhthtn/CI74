import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function LoginPage() {
    return (<Container className="login-page">

        <Form className="bg-white p-3 border rounded shadow-sm">
            <h2 className="text-center">Login to your account</h2>

            <Form.Group className="mb-3">
                <Form.Label>Email/Username</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary">Login</Button>
        </Form>

    </Container>);
}