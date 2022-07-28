import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Categories from './Categories';
import NewsLetter from './NewsLetter';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Products></Products>
            <Business></Business>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;