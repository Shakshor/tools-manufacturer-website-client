import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { _id, name } = deletingProduct;


    // event handler for delete
    const handleDelete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
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
            <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure want to delete <span className='text-blue-400'>{name}</span> ?</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>
                        <label for="product-delete-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ProductDeleteModal;