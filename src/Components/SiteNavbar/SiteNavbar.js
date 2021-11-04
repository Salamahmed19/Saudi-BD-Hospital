import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SiteNavbar = () => {
    const { user, logOut} = useAuth();
    return (
        <Navbar style={{fontSize:"25px", fontWeight:"bold"}} className="bg-color" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">BD Hospital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/insurances">Insurances</Nav.Link>
                    <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                {user?.email ? <span>Hello: {user?.displayName}</span> :
                <Nav.Link as={Link} to="/signup"><Button className="me-2">Sign Up</Button></Nav.Link>}
                {user?.email ? <Button className="ms-2" onClick={logOut}>Sign Out</Button> : <Nav.Link as={Link} to="/signin"><Button className="me-2">Sign In</Button></Nav.Link>}
                </Navbar.Collapse>
           </Container>
        </Navbar>
    );
};

export default SiteNavbar;