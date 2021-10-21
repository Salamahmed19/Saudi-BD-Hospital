import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {servicesId} = useParams();
    return (
        <div>
            this is booking id {servicesId}
        </div>
    );
};

export default Booking;