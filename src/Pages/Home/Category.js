import React from 'react';


const Category = ({ img, cardTitle }) => {
    return (
        <div className="card card-compact lg:lg:max-w-lg  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center">{cardTitle}</h2>
            </div>
        </div>
    );
};

export default Category;