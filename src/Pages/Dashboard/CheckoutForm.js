import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();

    // error state
    const [cardError, setCardError] = useState('');
    // client secret state
    const [clientSecret, setClientSecret] = useState('');
    // payment success
    const [success, setSuccess] = useState('');
    // transaction id
    const [transactionId, setTransactionId] = useState('');

    const { price, Quantity, user, userName } = order;
    const totalPrice = price * Quantity;


    // fetch the paymentIntent
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price: totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    // form event handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // loading card info from cardElement 
        const card = elements.getElement(CardElement);

        // card is not loaded or empty
        if (card === null) {
            return;
        }

        // payment method set
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // card error set
        setCardError(error?.message || '');

        /* ---------------- process-2 ------ 
        if (error) {
            // console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        } 
        -----------------------------------*/

        setSuccess(''); // ( Initially success is empty string)

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: user,
                    },
                },
            },
        );

        // payment intentError check
        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congratulations! Your payment is completed')
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {/* --------- error showing ---------- */}
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {/* --------- success showing ---------- */}
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className='text-green-500'>Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;