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
            fetch(`http://localhost:5000/user/${email}`, {
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

                <div class="card flex-shrink-0  w-full max-w-lg   shadow-2xl bg-base-100">
                    <div class="card-body">
                        <input type="text" value={user?.email} placeholder="Type here" class="input input-bordered w-full max-w-lg" readOnly disabled />
                        <input type="text" value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-lg" readOnly disabled />
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input type="text" placeholder="Education" class="input input-bordered"  {...register("name", { required: true, maxLength: 20 })} />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input placeholder="Phone Number" class="input input-bordered" type="text" {...register("phone", { required: true })} />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Location</span>
                            </label>
                            <input placeholder="Address" class="input input-bordered" type="text" {...register("location", { required: true })} />

                        </div>
                        {/* <div class="form-control">
                            <label class="label">
                                <span class="label-text">Link</span>
                            </label>
                            <input class="input input-bordered" placeholder='Photo URL' type="text" {...register("link")} />
                        </div> */}
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <h2 className='text-xl mt-10 text-blue-600 ml-10'>My Project Links</h2>
            <div className='ml-10 py-5'>
                <ul>
                    <li><a className="link link-hover link-primary" href='https://product-analysis-website-shakshor.netlify.app/'>Product-Analysis-Website</a><br></br></li>
                    <li><a className="link link-hover link-primary" href='https://independent-sports-photography.web.app/'>Independent-Sports-Photography</a><br></br></li>
                    {/* <a className="link link-hover" href='https://product-analysis-website-shakshor.netlify.app/'>Tools Manufacturer</a> */}
                </ul>
            </div>
        </div >
    );
};

export default MyProfile;