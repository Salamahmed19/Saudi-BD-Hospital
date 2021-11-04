import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row className="my-5">
                <h2 className="text-center">About Saudi Bangladeshi Hospital</h2>
                <Col md={6} sm={12} xs={12}>
                    <h4 className="my-4">Building on a long family legacy as medical pioneers in the Kingdom, Saudi Bangladeshi Hospital was founded by the Batterjee family and has grown to become the leading private healthcare provider across the Middle East.</h4>
                    <p>Saudi Bangladeshi Hospital is a representation of how far we have come, a celebration of our Saudi roots, our international partnerships, our commitment to continued advancements, and a consolidation of our healthcare and education infrastructure such as, Subspecialty Clinics, Mayo Clinic Care Network, International Visiting Professor Program, Saudi Bangladeshi Hospital Academy, and more.</p>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <img className="img-fluid mt-4" src="https://www.sharp.com/health-news/images/4-step-guide-to-health-insurance-HN1182-iStock-1288962140-Cover-Re-Sized.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;