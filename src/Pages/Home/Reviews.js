import React, { useState } from 'react';
import { useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // button state
    const [expended, setExpended] = useState(false);

    // react firebase hook
    // const [user, loading, error] = useAuthState(auth);

    // if (user) {
    //     console.log(user);
    // }


    useEffect(() => {
        fetch('https://tools-manufacturer-website-server.onrender.com/review')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const reviewData = expended ? data : data.slice(0, 3);
                setReviews(reviewData);
            });
    }, [expended]);

    return (
        <div className='mt-20'>
            <h2 className='text-2xl text-center  text-indigo-700
                            mb-16'>
                <span className='no-underline decoration-0 text-base text-orange-500'>customer</span>
                <br />
                <span className='decoration-4 font-bold
                                    underline underline-offset-8 decoration-cyan-400
                                    hover:decoration-orange-500
                                    transition-colors ease-in duration-300'>What Some Awesome People Say</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {
                    reviews.map(review => <Review review={review} key={review._id} ></Review>)
                }
            </div>
            <div className='text-center  pb-5'>
                {expended && <button onClick={() => setExpended(!expended)} className="btn btn-wide btn-ghost text-lg font-semibold">
                    {
                        expended ? 'show less..' : 'show more..'
                    }
                </button>}
            </div>
        </div>

    );
};

export default Reviews;