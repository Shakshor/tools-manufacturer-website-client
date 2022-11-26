import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    // react query
    const { data: tools, isLoading } = useQuery('tools', () => fetch(`https://tools-manufacturer-website-server.onrender.com/product`).then(res => res.json))


    // third party: imgbb api key
    const imageStorageKey = '3529629c25e2110da0467cf68205fc25';


    // data loading before rendering
    if (isLoading) {
        return <Loading></Loading>;
    }

    const onSubmit = async data => {
        // console.log(data);

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        price: data.price,
                        quantity: data.quantity,
                        available: data.available,
                    }

                    //send to database
                    fetch(`https://tools-manufacturer-website-server.onrender.com/product`, {
                        method: 'POST',
                        body: JSON.stringify(product),
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                        .then((response) => response.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('Product added successfully.');
                                reset();
                            }
                            else {
                                toast.error('Failed to add an Product');
                            }
                        });

                }

            });



    }




    return (
        <div className=''>
            <h2 className='text-lg text-blue-600 ml-10'>Add Product</h2>
            <form className='flex flex-column ml-9' onSubmit={handleSubmit(onSubmit)}>
                <div className="card flex-shrink-0  w-full max-w-lg   shadow-2xl bg-base-100">
                    <div className="card-body">

                        {/* --------- Name ------------------ */}
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Product Name" className="input input-bordered "  {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product description required'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Provide maximum 100 characters',
                                }
                            })} />

                            {/* ---------- error message ---------- */}
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                                {errors.name?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>

                        {/* ----------- Description ------------ */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" cols="4" placeholder="Product Description" className="input input-bordered"  {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Product description required'
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'Provide maximum 100 characters',
                                }
                            })} />
                            {/* ----- error message ---- */}
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}

                                {errors.description?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}

                            </label>
                        </div>

                        {/* ------------- Minimum Quantity -------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input placeholder="Minimum Quantity To Buy" className="input input-bordered" type="number" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Product minimum quantity required'
                                },
                            })} />

                            {/* --- error message ---- */}
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity?.message}</span>}
                            </label>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available</span>
                            </label>
                            <input placeholder="Available Product" className="input input-bordered" type="number" {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Product available quantity required'
                                },
                            })} />

                            {/* ----- error message ---- */}
                            <label className="label">
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available?.message}</span>}
                            </label>

                        </div>


                        {/* ----------- price ---------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input placeholder="Price" className="input input-bordered" type="number" {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Product price required'
                                },
                            })} />

                            {/* ---- error message ----*/}
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price?.message}</span>}
                            </label>

                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input className="input input-bordered" type="file" {...register("img", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                }
                            })} />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default AddProduct;