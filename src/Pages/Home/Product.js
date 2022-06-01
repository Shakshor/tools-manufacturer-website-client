import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, quantity, avilabale, price } = product;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-emerald-500">{name}</h2>
                <p >{description}</p>
                <p className='text-base text-blue-700'>Price:{price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;