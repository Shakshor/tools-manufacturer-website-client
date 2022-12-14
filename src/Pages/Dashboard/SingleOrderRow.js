import React from 'react';
import { toast } from 'react-toastify';

const SingleOrderRow = ({ order, index, refetch, setOrderDelete }) => {
    // console.log(order);
    const { _id, img, userName, Quantity } = order;

    // event handler for update
    const handleStatus = (id) => {
        // console.log('clicked');
        fetch(`https://tools-manufacturer-website-server.onrender.com/allOrders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({ update: "shipped" }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('status field updated');
                    refetch();
                }
            })

    }








    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={order.order} />
                    </div>
                </div>
            </td>
            <td>{userName}</td>
            <td>{order.order}</td>
            <td>{Quantity}</td>
            <td>
                {(order.price && !order.paid) && < p className='text-error'>Unpaid</p>}
                {(order.price && order.paid) && < p className='text-success'>Paid</p>}
            </td>
            <td>
                {
                    (order.paid && order.status === "pending") &&
                    <button className='btn btn-info btn-xs' onClick={() => handleStatus(_id)} >Ship Now</button>
                }

            </td>
            <td>
                {
                    !order.paid && <label htmlFor="singleOrder-delete-modal" className="btn btn-xs btn-error" onClick={setOrderDelete(order)} >Delete</label>
                }


            </td>
        </tr >

    );
};

export default SingleOrderRow;