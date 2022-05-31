import React from 'react';
import Category from './Category';
import cat1 from '../../../src/images/categories/cat-1.jpg'

const Categories = () => {
    return (
        <div>
            <h2 className=' text-3xl font-bold text-primary text-center my-8'>Category</h2>
            <div className='grid grid-cols-5 gap-7'>
                <Category cardTitle='Nail Guns' img={cat1}></Category>
                <Category cardTitle='Nail Guns' img={cat1} ></Category>
                <Category cardTitle='Nail Guns' img={cat1} ></Category>
                <Category cardTitle='Nail Guns' img={cat1}></Category>
                <Category cardTitle='Nail Guns' img={cat1}></Category>
            </div >
        </div>
    );
};

export default Categories;