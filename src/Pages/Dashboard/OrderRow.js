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
                {(order.price && order.paid) &&
                    <p><span className='text-success'>Paid</span></p>
                }

            </td>
            <td className=''>{
                (order.paid && order.status) &&
                <p>{order.status === "pending" ? <span className='text-red-500'>pending</span> : <span className='text-success'>shipped</span>}</p>
            }</td>
            <td>
                {
                    !order.paid && <label for="order-delete-modal" onClick={setOrderDelete(order)} class="btn btn-xs btn-error">delete</label>
                }

            </td>
        </tr>
    );
};

export default OrderRow;