import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://stools-manufacturer.herokuapp.com/orders?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        // navigate to home
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    setOrders(data)
                })
        }

    }, [user]);

    // deleting the product
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            fetch(`https://stools-manufacturer.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remainingOrders = orders.filter(order => order.orderId !== id);
                    setOrders(remainingOrders);
                });
        }
    }


    return (
        <div>
            <h2 className='text-xl text-blue-600'>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w- lg:max-w-md">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Name</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.order}</td>
                                <td>{order.Quantity}</td>
                                <td>{order.address}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success' >Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}

                                </td>
                                <td>
                                    {
                                        !order.paid && <button className='btn btn-xs btn-error' onClick={() => handleDelete(order.orderId)}>Delete</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;