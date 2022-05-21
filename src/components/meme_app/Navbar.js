import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

export default function Navbar() {

    const activeClassName = ({ isActive }) => isActive ? "nav-link text-primary" : "nav-link";

    return (<BSNavbar expand="lg" bg="white" className="border-bottom mb-3">
        <Container fluid>
            <BSNavbar.Brand>Hello Memes</BSNavbar.Brand>
            <BSNavbar.Toggle aria-control="my-navbar" />
            <BSNavbar.Collapse id="my-navbar">
                {/* ms-auto = margin-left: auto */}
                {/* me-auto = margin-right: auto */}
                <Nav className="ms-auto">
                    <NavLink className={activeClassName} to="/">Home</NavLink>
                    <NavLink className={activeClassName} to="/login">Login</NavLink>
                    <NavLink className={activeClassName} to="/register">Register</NavLink>
                </Nav>
            </BSNavbar.Collapse>
        </Container>
    </BSNavbar>);
}