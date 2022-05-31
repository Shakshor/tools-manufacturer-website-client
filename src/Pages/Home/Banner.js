import React from 'react';
import banner1 from '../../../src/images/banner/banner1-1130x560.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-7">
            <div id="slide1" className="carousel-item relative w-full">
                {/* <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" className="w-full" /> */}
                <div class="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-4xl font-bold">Hello there</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">

                {/* <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" /> */}
                <div class="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div >
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                {/* <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" /> */}
                <div class="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
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