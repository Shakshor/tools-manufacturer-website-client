import React from 'react';
import { toast } from 'react-toastify';

const SingleOrderDeleteModal = ({ orderDelete, setOrderDelete, refetch }) => {
    const { _id, order } = orderDelete;

    // event handler for delete
    const handleDelete = id => {
        console.log('clicked');
        fetch(`https://stools-manufacturer.herokuapp.com/allOrders/${id}`, {
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
        <div>
            <input type="checkbox" id="singleOrder-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure want to delete <span className='text-red-500'>{order}</span>?</h3>
                    <div className="modal-action">
                        <label htmlFor="order-delete-modal" className="btn btn-xs btn-error" onClick={() => handleDelete(_id)}>delete</label>
                        <label htmlFor="singleOrder-delete-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default SingleOrderDeleteModal;