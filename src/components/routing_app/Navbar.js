import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

export default function Navbar() {

    const navigate = useNavigate(); // navigate là 1 function

    const navLinkClassName = ({ isActive }) => isActive ? 'nav-link text-primary' : 'nav-link';
    
    const redirectToLogin = () => {
        navigate('/login');
    }

    return (<BSNavbar expand="lg" bg="light">
        <Container>
            <BSNavbar.Brand>Routing App</BSNavbar.Brand>
            <Nav className="ms-auto">
                {/* <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Products</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Welcome</Nav.Link> */}

                <NavLink className={navLinkClassName} to="/">Home</NavLink>
                <NavLink className={navLinkClassName} to="/welcome">Welcome</NavLink>
                <NavLink className={navLinkClassName} to="/product">Products</NavLink>

                <Button variant="outline-secondary" className="me-2" onClick={redirectToLogin}>Login</Button>
                <Button variant="primary">Register</Button>
            </Nav>
        </Container>
    </BSNavbar>);
}