import React from 'react';


const ProductRow = ({ product, index, setDeletingProduct }) => {
    const { name, img, available } = product;



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
                <label onClick={() => setDeletingProduct(product)} for="product-delete-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;