import React from 'react';

const Review = ({ review }) => {

    // console.log(review);

    return (
        <section>
            {/* <div className="card lg:max-w-lg bg-slate-100 
                    text-black hover:bg-slate-300">
                <div className="card-body items-center text-center">
                    <div className={"avatar placeholder"}>
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review?.img} alt={review.name} />
                        </div>

                    </div>
                    <p className='text-base uppercase font-semibold'>{review?.name}</p>
                    <p className='text-lg indent-8'>{review.review}</p>
                    <h2 className="card-title">Ratings: {review.ratings}</h2>

                </div>
            </div> */}

            {/* ----------------- */}
            <div className="card lg:max-w-lg 
                    text-black rounded-md border-2 h-full 
                    hover:shadow-2xl hover:border-0">
                <figure className='bg-base-100 h-52 '>
                    <div className="w-24 h-24 rounded-3xl ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review?.img} alt={review.name} className='w-24 h-24 mask mask-circle' />
                    </div>
                </figure>
                <div className="card-body rounded-tr-full bg-primary text-white text-lg">
                    <p className=' uppercase font-semibold text-cyan-200'>{review?.name}</p>
                    <p>{review.review}</p>
                    <h2>Ratings: {review.ratings}</h2>
                </div>
            </div>
        </section>
    );
};

export default Review;