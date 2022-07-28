import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ orderDelete, setOrderDelete, refetch }) => {
    const { _id, userName, order } = orderDelete;

    // deleting the specific order
    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
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
        <div> <input type="checkbox" id="order-delete-modal" class="modal-toggle z-20" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hello! {userName}</h3>
                    <h3 class="font-bold text-lg text-red-600">Are you sure want to delete <span className='text-blue-400'>{order}</span> order?</h3>
                    <div class="modal-action">
                        <button className='btn btn-xs btn-error' onClick={() => handleDelete(_id)} >Delete</button>
                        <label for="order-delete-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDeleteModal;