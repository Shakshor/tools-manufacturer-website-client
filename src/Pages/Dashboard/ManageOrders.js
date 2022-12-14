import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleOrderDeleteModal from './SingleOrderDeleteModal';
import SingleOrderRow from './SingleOrderRow';

const ManageOrders = () => {
    // modal open state
    const [orderDelete, setOrderDelete] = useState(null);

    // use react query
    const { data: AllOrders, isLoading, refetch } = useQuery('AllOrders', () => fetch(`https://tools-manufacturer-website-server.onrender.com/allOrders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            {/* <h2 className="text-xl">Manage Orders.{AllOrders.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>User Name</th>
                            <th>Order Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllOrders.map((order, index) => <SingleOrderRow
                                order={order}
                                key={order._id}
                                index={index}
                                refetch={refetch}
                                setOrderDelete={setOrderDelete}
                            ></SingleOrderRow>)
                        }

                    </tbody>
                </table>
            </div>

            {/* ------- SingleOrder Delete Modal------------ */}
            {
                orderDelete &&
                <SingleOrderDeleteModal
                    orderDelete={orderDelete}
                    setOrderDelete={setOrderDelete}
                    refetch={refetch}
                ></SingleOrderDeleteModal>
            }


        </div>
    );
};

export default ManageOrders;