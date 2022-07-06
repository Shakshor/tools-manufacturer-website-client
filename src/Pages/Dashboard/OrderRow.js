import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setOrderDelete }) => {



    return (
        <tr key={order._id}>
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
                    !order.paid && <label for="order-delete-modal" onClick={setOrderDelete(order)} class="btn btn-xs btn-error">delete</label>
                }

            </td>
        </tr>
    );
};

export default OrderRow;