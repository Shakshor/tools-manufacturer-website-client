import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Categories from './Categories';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Business></Business>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;