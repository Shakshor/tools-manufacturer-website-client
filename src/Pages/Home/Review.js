import React from 'react';

const Review = ({ review }) => {

    return (
        <div class="card lg:max-w-lg bg-neutral">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-orange-200">Ratings: {review.ratings}</h2>
                <p className='text-blue-300 text-lg'>{review.review}</p>
            </div>
        </div>
    );
};

export default Review;