import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {servicesId} = useParams();
    return (
        <div className="text-center mt-5">
            <p className="fs-1">Thank you for choosing the service no {servicesId}</p>
        </div>
    );
};

export default Booking;