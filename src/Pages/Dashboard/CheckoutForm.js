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
    // spinner as processing state
    const [processing, setProcessing] = useState(false);

    const { _id, price, Quantity, user, userName } = order;
    const totalPrice = price * Quantity;


    // fetch the paymentIntent
    useEffect(() => {
        fetch('https://stools-manufacturer.herokuapp.com/create-payment-intent', {
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
        setProcessing(true);
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
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congratulations! Your payment is completed')


            // update the order & store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            }
            fetch(`https://stools-manufacturer.herokuapp.com/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
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
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
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