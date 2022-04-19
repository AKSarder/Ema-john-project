import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts()

    return (
        <div>
            <h1>{products.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;