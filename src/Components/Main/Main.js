import React from 'react';
import { Container } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';
import Insurances from '../Insurances/Insurances';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Main = () => {
    return (
        <>
        <Container>
            <div className="mt-5">
                <h2 className="text-center">Look at our services</h2>
                <Services></Services>
            </div>
            <div className="mt-5">
                <h2 className="text-center">Look at our doctors</h2>
                <Doctors></Doctors>
            </div>
            <div className="mt-5">
                <h2 className="text-center">Look at our insurances</h2>
                <Insurances></Insurances>
            </div>
        </Container>
        <Container>
            <div className="mt-5">
                    <h2 className="text-center">Look at our pharmacy products</h2>
                    <Products></Products>
                </div>
            </Container>
        </>
    );
};

export default Main;