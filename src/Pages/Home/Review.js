import React from 'react';

const Review = ({ review }) => {

    // console.log(review);

    return (
        <div className="card lg:max-w-lg bg-slate-100 
                    text-black hover:bg-slate-300">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review?.img} alt={review.name} />
                    </div>

                </div>
                <p className='text-base uppercase font-semibold'>{review?.name}</p>
                <p className='text-lg indent-8'>{review.review}</p>
                <h2 className="card-title">Ratings: {review.ratings}</h2>

            </div>
        </div>
    );
};

export default Review;