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
        fetch('https://stools-manufacturer.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const reviewData = expended ? data : data.slice(0, 3);
                setReviews(reviewData);
            });
    }, [expended]);

    return (
        <div className='mt-20'>
            <h2 className='text-2xl text-center font-bold text-indigo-700'>What Our Customer Say</h2>
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