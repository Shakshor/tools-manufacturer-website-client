import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';
import OrderDeleteModal from './OrderDeleteModal';


const MyOrders = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);
    // order delete modal state
    const [orderDelete, setOrderDelete] = useState(null);

    const navigate = useNavigate();

    // using React Query
    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`http://localhost:5000/orders?user=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        // console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            // navigate to home
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json();
    }))

    // loading problem solving(undefined length problem) for react query
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='mb-7'>
            <h2 className='text-xl text-blue-600'>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Name</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                order={order}
                                index={index}
                                key={order._id}
                                setOrderDelete={setOrderDelete}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>

            </div>

            {/*--------- order delete modal --------- */}

            {
                orderDelete && <OrderDeleteModal
                    orderDelete={orderDelete}
                    setOrderDelete={setOrderDelete}
                    refetch={refetch}
                ></OrderDeleteModal>
            }

        </div>
    );
};

export default MyOrders;