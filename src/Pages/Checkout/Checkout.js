import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h1>this si checkout</h1>
        </div>
    );
};

export default Checkout;