import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Insurance = (props) => {
    const {Img, Des, Name, Start, End } = props.insurance
    return (
        <Col md={4} sm={12}>
            <Card className="shadow radious" style={{ width: '18rem'}}>
                    <Card.Img className="p-3" style={{ height:"15rem"}} variant="top" src={Img} />
                    <Card.Body>
                    <Card.Title className="text-center">{Name}</Card.Title>
                    <Card.Text>Valid From {Start} To {End}</Card.Text>
                    <Card.Text>{Des}</Card.Text>
                    </Card.Body>
            </Card>
        </Col>
    );
};

export default Insurance;