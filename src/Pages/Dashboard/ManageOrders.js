import React from 'react';
import { useQuery } from 'react-query';

const ManageOrders = () => {
    // use react query
    const { data: AllOrders, isLoading } = useQuery('AllOrders', () => fetch(``).then(res => res.json()))

    return (
        <div>
            <h2 className="text-xl">Manage Orders.</h2>
        </div>
    );
};

export default ManageOrders;