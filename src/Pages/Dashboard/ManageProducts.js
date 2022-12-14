import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductDeleteModal from './ProductDeleteModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    // opening modal state
    const [deletingProduct, setDeletingProduct] = useState(null);

    // using react query to load the products
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://tools-manufacturer-website-server.onrender.com/product')
        .then(res => res.json()));

    // query loading  
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {/* <h2 className='text-2xl'>Manage Products.{products.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* ----- product info ------ */}
                        {
                            products.map((product, index) => <ProductRow product={product} key={product._id} index={index} setDeletingProduct={setDeletingProduct}></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>

            {/* ------- Product Delete Modal Opening -------*/}
            {
                deletingProduct && <ProductDeleteModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct} ></ProductDeleteModal>
            }

        </div>
    );
};

export default ManageProducts;