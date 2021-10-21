import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {Id, Img, Des, Name, Price } = props.service
    return (
        <div className="col-md-4">
            <Card className="shadow" style={{ width: '18rem'}}>
                    <Card.Img style={{ height:"15rem"}} variant="top" src={Img} />
                    <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>Price : {Price} Riyals</Card.Text>
                    <Card.Text>{Des}</Card.Text>
                    <Link to={`/booking/${Id}`}><Button>Book Now</Button></Link>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default Service;