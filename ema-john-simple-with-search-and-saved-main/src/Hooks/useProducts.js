import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../fakeData/products.JSON')
            .then(res => res.json())
            .then(data => console.log(data));

    }, [])

    // return necesarry things
    return ([products, setProducts]);
};

export default useProducts;