import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch ("./FakeDB/Doctor.json")
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])
    return (
        <Container className="my-5">
            <Row className="my-5 g-4">
            {
                doctor.map(doctor => <Doctor doctor={doctor} key={doctor.Id}></Doctor>)
            }
            </Row>
        </Container>
    );
};

export default Doctors;