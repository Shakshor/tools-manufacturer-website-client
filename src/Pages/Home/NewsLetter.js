import React from 'react';

const NewsLetter = () => {
    return (
        <div className="hero min-h-full lg:h-96 bg-green-50 my-5">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold text-">Newsletter</h1>
                    <p className="py-6">Subscribe to our newsletters now and stay up to date with new collections and exclusive offers</p>
                    <input type="text" placeholder="Enter e-mail here" className="input input-bordered input-primary w-full max-w-xs text-lg" />
                    <br></br>
                    <button className="btn btn-primary lg:btn-wide mt-5 lg:mt-10">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;