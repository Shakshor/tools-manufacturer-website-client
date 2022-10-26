import React from 'react';
import banner1 from '../../assets/images/banner/handToolsBanner.jpg';
import banner2 from '../../assets/images/banner/handSawBanner2.jpg';
import banner3 from '../../assets/images/banner/banner1.jpg';

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero h-full lg:min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold font-serif">Best Wood Tools<br></br>For Creative Work</h1>
                                <p className="mb-5  lg:text-xl font-bold text-yellow-300">Hurry,Great Deals-Every Weekends</p>
                                <button className="btn-sm
                                    bg-gradient-to-r from-primary via-blue-600 to-blue-400
                                    hover:bg-gradient-to-l
                                    lg:mt-16
                                    lg:w-36
                                    btn-primary animate-bounce 
                                    lg:animate-bounce 
                                    lg:btn lg:btn-primary lg:text-base
                                    font-semibold">Shop Now</button>
                            </div>
                        </div>
                    </div >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle w-4 -ml-5  lg:w-12">❮</a>
                        <a href="#slide2" className="btn btn-circle w-4 -mr-5  lg:w-12">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero h-full lg:min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold font-serif">Best Hands Saw Tools Collection</h1>
                                <p className="mb-5  lg:text-xl font-bold text-yellow-300">Save 20% off - on your First Order</p>
                                <button className="btn-sm
                                    bg-gradient-to-r from-primary via-blue-600 to-blue-400
                                    hover:bg-gradient-to-l
                                    lg:mt-16
                                    lg:w-36
                                    btn-primary animate-bounce 
                                    lg:animate-bounce 
                                    lg:btn lg:btn-primary lg:text-base
                                    font-semibold">Shop Now</button>
                            </div>
                        </div>
                    </div >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle w-4 -ml-5  lg:w-12">❮</a>
                        <a href="#slide3" className="btn btn-circle w-4 -mr-5  lg:w-12">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero h-full lg:min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold font-serif">Best Power Tools</h1>
                                <p className="mb-5 lg:text-xl font-bold text-yellow-300">Save 15% off - on your First Order</p>
                                <button className="btn-sm
                                    bg-gradient-to-r from-primary via-blue-600 to-blue-400
                                    hover:bg-gradient-to-l
                                    lg:mt-16
                                    lg:w-36
                                    btn-primary animate-bounce 
                                    lg:animate-bounce 
                                    lg:btn lg:btn-primary lg:text-base
                                    font-semibold">Shop Now</button>
                            </div>
                        </div>
                    </div >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle w-4 -ml-5  lg:w-12">❮</a>
                        <a href="#slide1" className="btn btn-circle w-4 -mr-5  lg:w-12">❯</a>
                    </div>
                </div>
            </div >
        </section>


    );
};

export default Banner;