import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);


        if (user) {
            console.log(user);
        }
        // console.log('inside useToken', user);
        const email = user?.email;
        if (email) {
            fetch(`https://tools-manufacturer-website-server.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    if (data) {
                        const accessToken = data.token;
                        localStorage.setItem('accessToken', accessToken);
                        toast('User Information updated')
                    }
                })
        }

    }

    return (
        <div className='mx-auto '>
            <h2 className='text-lg text-blue-600 ml-10'>My Information</h2>
            <form className='flex flex-column ml-9' onSubmit={handleSubmit(onSubmit)}>

                <div className="card flex-shrink-0  w-full max-w-lg   shadow-2xl bg-base-100">
                    <div className="card-body">
                        <input type="text" value={user?.email} placeholder="Type here" className="input input-bordered w-full max-w-lg" readOnly disabled />
                        <input type="text" value={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-lg" readOnly disabled />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input type="text" placeholder="Education" className="input input-bordered"  {...register("name", { required: true, maxLength: 20 })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input placeholder="Phone Number" className="input input-bordered" type="text" {...register("phone", { required: true })} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input placeholder="Address" className="input input-bordered" type="text" {...register("location", { required: true })} />

                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Link</span>
                            </label>
                            <input className="input input-bordered" placeholder='Photo URL' type="text" {...register("link")} />
                        </div> */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div >
    );
};

export default MyProfile;