import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { _id, name } = deletingProduct;


    // event handler for delete
    const handleDelete = id => {
        fetch(`https://tools-manufacturer-website-server.onrender.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Product: ${name} is deleted`);
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure want to delete <span className='text-blue-400'>{name}</span> ?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="product-delete-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ProductDeleteModal;