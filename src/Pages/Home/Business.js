import React from 'react';
import BusinessSummary from './BusinessSummary';
import customer from '../../assets/images/icons/customer.png';
import revenue from '../../assets/images/icons/revenue.png';
import tools from '../../assets/images/icons/tools.png';

const Business = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-2xl text-center text-blue-900 font-bold py-3'>Millions Business Contact</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                <BusinessSummary img={customer} number='100+' title='customers'></BusinessSummary>
                <BusinessSummary img={revenue} number='120M+' title='annual revenue'></BusinessSummary>
                <BusinessSummary img={tools} number='50+' title='tools'></BusinessSummary>
            </div>
        </div>
    );
};

export default Business;