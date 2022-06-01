import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>Purchase the Item here:{productId}</h2>
        </div>
    );
};

export default Purchase;