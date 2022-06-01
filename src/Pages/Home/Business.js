import React from 'react';
import BusinessSummary from './BusinessSummary';

const Business = () => {
    return (
        <div className='my-5'>
            <h2 className='text-2xl text-center text-blue-900 font-bold py-3'>Millions Business Contact</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                <BusinessSummary></BusinessSummary>
                <BusinessSummary></BusinessSummary>
                <BusinessSummary></BusinessSummary>
            </div>
        </div>
    );
};

export default Business;