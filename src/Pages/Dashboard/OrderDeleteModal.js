import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ orderDelete, setOrderDelete, refetch }) => {
    const { _id, userName, order } = orderDelete;

    // deleting the specific order
    const handleDelete = id => {
        fetch(`https://tools-manufacturer-website-server.onrender.com/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Order ${order} is deleted`);
                    setOrderDelete(null);
                    refetch();
                }
            });
    }

    return (
        <div> <input type="checkbox" id="order-delete-modal" className="modal-toggle z-20" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello! {userName}</h3>
                    <h3 className="font-bold text-lg text-red-600">Are you sure want to delete <span className='text-blue-400'>{order}</span> order?</h3>
                    <div className="modal-action">
                        <button className='btn btn-xs btn-error' onClick={() => handleDelete(_id)} >Delete</button>
                        <label htmlFor="order-delete-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDeleteModal;