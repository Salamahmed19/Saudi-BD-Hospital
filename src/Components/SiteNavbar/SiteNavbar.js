import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SiteNavbar = () => {
    const { user, logOut} = useAuth();
    return (
        <Navbar style={{fontSize:"25px", fontWeight:"bold", text:"white"}} className="bg-color" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">BD Hospital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/insurances">Insurances</Nav.Link>
                    <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                {user?.email ? <span>Hello: {user?.displayName}</span> :
                <div className="d-flex"><Nav.Link as={Link} to="/signin">SignIn</Nav.Link><Nav.Link as={Link} to="/signup">SignUp</Nav.Link></div>}
                {user?.email && <Button onClick={logOut}>Sign Out</Button>}
                </Navbar.Collapse>
           </Container>
        </Navbar>
    );
};

export default SiteNavbar;