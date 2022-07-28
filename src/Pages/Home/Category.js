import React from 'react';


const Category = ({ img, cardTitle }) => {
    return (
        <div className="card card-compact lg:lg:max-w-lg  bg-base-100 shadow-xl">
            <figure><img src={img} className='w-32 h-32' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-xl text-center font-semibold text-black">{cardTitle}</h2>
            </div>
        </div>
    );
};

export default Category;