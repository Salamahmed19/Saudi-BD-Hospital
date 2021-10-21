import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch("./FakeDB/Service.json")
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <Container>
            <Row className="my-5 g-5">
            {
                service.map(service => <Service service={service} key={service.Id}></Service>)
            }
            </Row>
        </Container>
    );
};

export default Services;