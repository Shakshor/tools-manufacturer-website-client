import React from 'react';
import { BiFace } from 'react-icons/bi';

const BusinessSummary = () => {
    return (
        <div class="card lg:max-w-lg bg-base-100 flex justify-center items-center">
            <div class="card-body">
                <h2 class="text-5xl"><BiFace></BiFace></h2>
                <h2 className='text-2xl text-blue-900 font-bold'>100+</h2>
                <p className='text-xl'>Customers</p>
            </div>
        </div>
    );
};

export default BusinessSummary;