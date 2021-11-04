import React from 'react';
import { Container } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';
import Insurances from '../Insurances/Insurances';
import NewsLetter from '../NewsLetter/NewsLetter';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Main = () => {
    return (
        <>
        <Container>
            <div className="mt-2">
                <h2 className="text-center">Our services</h2>
                <Services></Services>
            </div>
            <div className="mt-2">
                <h2 className="text-center">Our doctors</h2>
                <Doctors></Doctors>
            </div>
            <div className="mt-2">
                <h2 className="text-center">Our insurance provider</h2>
                <Insurances></Insurances>
            </div>
        </Container>
        <Container>
            <div className="mt-2">
                    <h2 className="text-center">Our pharmacy products</h2>
                    <Products></Products>
                </div>
        </Container>
        <NewsLetter></NewsLetter>
        </>
    );
};

export default Main;