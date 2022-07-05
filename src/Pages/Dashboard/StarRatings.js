//'#ffc107','#e4e5e9'
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const StarRatings = ({ setRating }) => {
    // ratings state
    const [ratings, setRatings] = useState(null);
    // mouse hover state
    const [hover, setHover] = useState(null);

    return (
        <div className='flex mt-5'>
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    // console.log('ratingValue', ratingValue);
                    return (
                        <label key={ratingValue}>
                            <input type="radio"
                                name="rating"
                                onClick={() => {
                                    setRatings(ratingValue);
                                    setRating(ratingValue);
                                }}
                                value={ratingValue}
                                className="hidden"

                            />
                            <StarIcon
                                className='h-10 w-10'
                                color={ratingValue <= (hover || ratings) ? '#ffc107' : '#e4e5e9'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            ></StarIcon>
                        </label>


                    )
                })}

        </div >
    );
};

export default StarRatings;