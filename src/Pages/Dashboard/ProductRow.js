import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch }) => {
    const { _id, name, img, available } = product;

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
                    toast.success(`Product ${name} is deleted`);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ProductRow;