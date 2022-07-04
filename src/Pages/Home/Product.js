import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, quantity, available, price } = product;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`purchase/${id}`);
    }

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-emerald-500">{name}</h2>
                <p >{description}</p>
                <p className='text-base text-blue-700'>Price:${price}</p>
                <p >Quantity:{quantity}</p>
                <p >Available:{available}</p>
                <div class="card-actions">
                    <button class="btn btn-primary" onClick={() => navigateToPurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;