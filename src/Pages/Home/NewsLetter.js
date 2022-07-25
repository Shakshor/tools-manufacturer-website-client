import React from 'react';

const NewsLetter = () => {
    return (
        <div class="hero min-h-full lg:h-96  bg-base-200 my-5">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-4xl font-bold text-">Newsletter</h1>
                    <p class="py-6">Subscribe to our newsletters now and stay up to date with new collections and exclusive offers</p>
                    <input type="text" placeholder="Enter e-mail here" class="input input-bordered input-primary w-full max-w-xs text-base" />
                    <br></br>
                    <button class="btn btn-primary lg:btn-wide mt-5 lg:mt-10">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;