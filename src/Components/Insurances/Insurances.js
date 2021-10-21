import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
            <div className="row g-5">
            {
                insurance.map(insurance => <Insurance insurance={insurance} key={insurance.Id}></Insurance>)
            }
            </div>
        </Container>
    );
};

export default Insurances;