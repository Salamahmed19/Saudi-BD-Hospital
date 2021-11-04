import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Insurance from '../Insurance/Insurance';

const Insurances = () => {
    const [insurance, setInsurance] = useState([])
    useEffect(() => {
        fetch ("./FakeDB/Insurance.json")
        .then(res => res.json())
        .then(data => setInsurance(data))
    },[])
    return (
        <Container className="my-5">
            <Row className="my-5 g-4">
            {
                insurance.map(insurance => <Insurance insurance={insurance} key={insurance.Id}></Insurance>)
            }
            </Row>
        </Container>
    );
};

export default Insurances;