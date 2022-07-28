import React from 'react';
import banner1 from '../../assets/images/banner/handToolsBanner.jpg';
import banner2 from '../../assets/images/banner/handSawBanner2.jpg';
import banner3 from '../../assets/images/banner/banner1.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div class="hero h-full lg:min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl lg:text-5xl font-bold font-serif">Best Wood Tools<br></br>For Creative Work</h1>
                            <p class="mb-5 lg:text-xl font-bold text-yellow-300">Hurry,Great Deals-Every Weekends</p>
                            <button class="btn-sm btn-primary lg:btn lg:btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div class="hero h-full lg:min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl lg:text-5xl font-bold font-serif">Best Hand Saw Tools Collection</h1>
                            <p class="mb-5 lg:text-xl font-bold text-yellow-300">Save 20% off - on your First Order</p>
                            <button class="btn-sm lg:btn btn-primary lg:btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div class="hero h-full lg:min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl lg:text-5xl font-bold font-serif">Best Power Tools</h1>
                            <p class="mb-5 lg:text-xl font-bold text-yellow-300">Save 15% off - on your First Order</p>
                            <button class="btn-sm lg:btn btn-primary lg:btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div >


    );
};

export default Banner;