import React from 'react';
import Category from './Category';
import cat1 from '../../assets/images/categories/cat-1.jfif';
import cat2 from '../../assets/images/categories/cat-2.jfif';
import cat3 from '../../assets/images/categories/cat-3.jfif';
import cat4 from '../../assets/images/categories/router2.jfif';


const Categories = () => {
    return (
        <div>
            <h2 className=' text-3xl font-bold text-primary text-center my-8'>Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <Category cardTitle='Power Saws' img={cat1}></Category>
                <Category cardTitle='Hand Saws' img={cat2} ></Category>
                <Category cardTitle='Chisels' img={cat3} ></Category>
                <Category cardTitle='Router' img={cat4}></Category>
            </div >
        </div>
    );
};

export default Categories;