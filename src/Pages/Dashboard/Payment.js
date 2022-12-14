import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LAtbZA3wrWUcM5O3CsaHF7FMSlSfrHWGK1Kwp9HvkhZvDoNBxOmSM4rYWK4fBmkclflH0vRrVJoK6R3Q48e8LqT005crCITCC');

const Payment = () => {
    // params payment id
    const { id } = useParams();

    // using react query to load specific order
    const url = `https://tools-manufacturer-website-server.onrender.com/orders/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // query loading
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-xl mt-2 ml-5 text-violet-900 font-semibold'>Payment Page</h1>

            {/* -------- order details info --------*/}
            <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-purple-600 text-xl'>Hello! {order.userName}</p>
                    <h2 className="card-title">Please Pay For <span className='text-purple-600'>{order.order}</span></h2>
                    <p className='text-purple-600 text-lg'>Quantity: {order.Quantity}</p>
                    <p className='text-purple-600 font-bold text-lg'>Please pay: ${order.price * order.Quantity}</p>
                </div>
            </div>

            {/* -------- payment method info --------*/}
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;