import React from 'react';
import Category from './Category';
import cat1 from '../../assets/images/categories/cat-1.jpg';

const Categories = () => {
    return (
        <div>
            <h2 className=' text-3xl font-bold text-primary text-center my-8'>Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <Category cardTitle='Power Saws' img={cat1}></Category>
                <Category cardTitle='Hand Saws' img={cat1} ></Category>
                <Category cardTitle='Chisels' img={cat1} ></Category>
                <Category cardTitle='Router' img={cat1}></Category>
            </div >
        </div>
    );
};

export default Categories;