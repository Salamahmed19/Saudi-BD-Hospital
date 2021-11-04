import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {Img, Specialist, Name, Age } = props.doctor
    return (
        <Col md={4} sm={12}>
            <Card className="shadow" style={{ width: '18rem'}}>
                    <Card.Img style={{ height:"15rem"}} variant="top" src={Img} />
                    <Card.Body>
                    <Card.Title className="text-center">{Name}</Card.Title>
                    <Card.Text>Age : {Age} Years</Card.Text>
                    <Card.Text>{Specialist}</Card.Text>
                    </Card.Body>
        </Card>
        </Col>
    );
};

export default Doctor;