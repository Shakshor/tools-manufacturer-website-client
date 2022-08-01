import React from 'react';


const ProductRow = ({ product, index, setDeletingProduct }) => {
    const { name, img, available } = product;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td>
                <label htmlFor="product-delete-modal" onClick={() => setDeletingProduct(product)} className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr >
    );
};

export default ProductRow;