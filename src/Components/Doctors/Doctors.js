import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
            <div className="row g-5">
            {
                doctor.map(doctor => <Doctor doctor={doctor} key={doctor.Id}></Doctor>)
            }
            </div>
        </Container>
    );
};

export default Doctors;