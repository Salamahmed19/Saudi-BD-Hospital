import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("/FakeDB/Service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <Row className="my-5 g-5">
            {
                services.map(service => <Service service={service} key={service.Id}></Service>)
            }
            </Row>
        </Container>
    );
};

export default Services;