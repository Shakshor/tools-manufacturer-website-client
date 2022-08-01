import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, quantity, available, price } = product;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`purchase/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-52">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-emerald-500">{name}</h2>
                <p >{description}</p>
                <p className='text-base text-blue-700'>Price:${price}</p>
                <p >Quantity:{quantity}</p>
                <p >Available:{available}</p>
                <div className="card-actions">
                    <button className="btn btn-wide btn-primary" onClick={() => navigateToPurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div >
    );
};

export default Product;