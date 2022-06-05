import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?user=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user]);

    // deleting the product
    const handleDelete = id => {

    }


    return (
        <div>
            <h2 className='text-xl text-blue-600'>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Name</th>
                            <th>Quantity</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.order}</td>
                                <td>{order.Quantity}</td>
                                <td>{order.address}</td>
                                <td><button className='btn btn-primary' onClick={() => handleDelete(order.orderId)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;