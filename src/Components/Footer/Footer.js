import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="bg-color">
            <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <p className="text-center">Copyright ©2021 All Rights Reserved.</p>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Footer;