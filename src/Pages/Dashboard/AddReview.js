import React, { useState } from 'react';
import StarRatings from './StarRatings';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddReview = () => {
    // react firebase hook
    const [user, loading, error] = useAuthState(auth);
    // ratings value
    const [rating, setRating] = useState(null);
    // text value state
    const [text, setText] = useState('');


    // textarea event handler
    const handleChange = event => {
        setText(event.target.value);
    }

    const handleSubmit = () => {
        // console.log(text);


        // POST review object to the database 
        const review = {
            name: user.displayName,
            img: user.photoURL,
            ratings: rating,
            review: text,
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('adding a review is completed');
                }
            });
    }


    return (
        <div className='w-9/12 '>
            <div className='flex justify-center  flex-col '>
                <h2 className='text-lg font-medium'>Review Here Please.</h2>

                <StarRatings setRating={setRating}></StarRatings>

                <textarea
                    className="textarea textarea-bordered my-4"
                    placeholder="Text Here"
                    name="text"
                    value={text}
                    onChange={handleChange}>
                </textarea>

                <button
                    class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md"
                    onClick={handleSubmit}
                >Add Review</button>
            </div>
        </div>
    );
};

export default AddReview;