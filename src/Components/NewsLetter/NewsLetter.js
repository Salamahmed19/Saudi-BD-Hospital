import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NewsLetter = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6} sm={12} className="mb-5">
                    <h1 className="text-center">NewsLetter</h1>
                    <h4>Stay up to date with our latest news and products</h4>
                    <input className="w-75 me-2" type="text" placeholder="Enter your email"/>
                    <button className="btn btn-primary" type="button">SUBSCRIBE</button>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLetter;