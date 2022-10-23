import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, quantity, available, price } = product;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`purchase/${id}`);
    }

    return (
        <div className="card lg:max-w-lg 
                        bg-base-100 shadow
                        transition ease-in-out delay-100 duration-500
                        hover:scale-110 hover:shadow-xl hover:z-10
                        hover:border-l-8 hover:border-primary">
            <figure className="px-10 pt-10 h-52">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-emerald-500">{name}</h2>
                <p title={name}>{description.length > 50 ? description.slice(0, 70) + '...' : description}</p>
                <p className='text-lg text-blue-700 font-semibold'>Price: ${price}</p>
                <p className='text-base font-semibold'>Quantity: {quantity}</p>
                <p className='text-base font-semibold'>Available: {available}</p>
                <div className="card-actions">
                    <button className="btn btn-wide btn-primary" onClick={() => navigateToPurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div >
    );
};

export default Product;