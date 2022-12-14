import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import useToken from '../../hooks/useToken';



const Login = () => {
    // handle errors react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();

    // react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    let signInError;

    // check user ,gUser, token
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    // loading problem
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    // error
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    // form event handler
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    }


    return (
        <div className='flex h-screen justify-center items-center bg-base-200'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* ---- input fields ----- */}
                        {/* --- email input field ------ */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* ----- password input field ------ */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {/* ----- error showing ------ */}
                        {signInError}

                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p><small>New to Doctors Portal? <Link to='/register' className='text-primary' >Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:bg-secondary-focus">Continue With Google</button>


                    {/* ------ demo admin section ----- */}
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 
                                bg-base-100 rounded-box shadow-lg mt-5">
                        <input type="checkbox" />
                        <div className="collapse-title bg-accent  font-medium uppercase">
                            show demo admin Info
                        </div>
                        <div className="collapse-content">
                            <p className='text-lg'><span className='font-semibold'>Email:</span> abc@ddd.com</p>
                            <p className='text-lg'><span className='font-semibold'>Password:</span> 123456</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Login;