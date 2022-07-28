import React from 'react';

const BusinessSummary = ({ img, number, title }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 flex justify-center items-center">
            <div class="card-body">
                <img src={img} className='w-20 h-20' alt='icon' />
                <p className='text-2xl text-blue-900 font-bold'>{number}</p>
                <p className='text-xl text-black'>{title}</p>
            </div>
        </div>
    );
};

export default BusinessSummary;