import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([])
    const [details, setDetails] = useState({})

    const history =useHistory()

    useEffect(() => {
        fetch ("/FakeDB/Service.json")
        .then(res =>res.json())
        .then(data => setServices(data))

    }, [])

    useEffect(() => {

        if(services.length > 0) {
            const exactItem =services.find(service => (service.Id === parseInt(serviceId)))
            setDetails(exactItem)
        }

    },[services])


    const HandleBookNow = () =>{
        alert("Successfully Booked")
        history.push("/services")
    }

    const handleGoBack = () =>{
        alert("Back to services page")
        history.push("/services")
    }

    return (
        <Row  className="justify-content-md-center my-5">
            <Col md={6} sm={12}>
                <h3 className="fs-1 text-center">Thank you <br /> You choose the service no {serviceId}</h3>
                <Card className="shadow radious" style={{ width: '40rem'}}>
                    <Card.Img className="p-3" style={{ height:"25rem"}} variant="top" src={details.Img} />
                    <Card.Body>
                    <Card.Title>{details.Name}</Card.Title>
                    <Card.Text>Price after discount : {parseInt(details.Price) - ((.20)*parseInt(details.Price))} Riyals</Card.Text>
                    <Card.Text>{details.Des}</Card.Text>
                    </Card.Body>
                    <div className="text-center pb-3">
                        <Button onClick={HandleBookNow}>Book Now</Button>
                        <Button onClick={handleGoBack} className="ms-5">Go Back</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default Booking;