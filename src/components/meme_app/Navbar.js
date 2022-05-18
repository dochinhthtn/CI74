import React from "react";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

export default function Navbar() {

    return (<BSNavbar expand="lg" bg="white" className="border-bottom mb-3">
        <Container fluid>
            <BSNavbar.Brand>Hello Memes</BSNavbar.Brand>
            <BSNavbar.Toggle aria-control="my-navbar"/>
            <BSNavbar.Collapse id="my-navbar">
                {/* ms-auto = margin-left: auto */}
                {/* me-auto = margin-right: auto */}
                <Nav className="ms-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </BSNavbar.Collapse>
        </Container>
    </BSNavbar>);
}