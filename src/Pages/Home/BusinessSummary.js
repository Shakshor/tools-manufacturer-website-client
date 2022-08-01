import React from 'react';

const BusinessSummary = ({ img, number, title }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 flex justify-center items-center">
            <div className="card-body">
                <img src={img} className='w-20 h-20' alt='icon' />
                <p className='text-2xl text-blue-900 font-bold pl-3'>{number}</p>
                <p className='text-xl text-black pl-3'>{title}</p>
            </div>
        </div>
    );
};

export default BusinessSummary;