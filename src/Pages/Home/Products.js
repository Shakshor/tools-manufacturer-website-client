import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-website-server.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div>
            <h2 className='text-3xl text-center text-blue-900 font-bold 
                           pt-20 pb-10 decoration-4 mb-16
                           underline underline-offset-8 decoration-cyan-400
                           hover:decoration-orange-500
                           transition-colors ease-in duration-300'>Tools</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;