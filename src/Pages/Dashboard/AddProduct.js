import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    // react query
    const { data: tools, isLoading } = useQuery('tools', () => fetch(`http://localhost:5000/product`).then(res => res.json))


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
                    fetch(`http://localhost:5000/product`, {
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
                <div class="card flex-shrink-0  w-full max-w-lg   shadow-2xl bg-base-100">
                    <div class="card-body">

                        {/* --------- Name ------------------ */}
                        <div class="form-control w-full max-w-lg">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Product Name" class="input input-bordered "  {...register("name", {
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
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name?.message}</span>}
                                {errors.name?.type === 'maxLength' && <span class="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>

                        {/* ----------- Description ------------ */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text" cols="4" placeholder="Product Description" class="input input-bordered"  {...register("description", {
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
                            <label class="label">
                                {errors.description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.description?.message}</span>}

                                {errors.description?.type === 'maxLength' && <span class="label-text-alt text-red-500">{errors.description?.message}</span>}

                            </label>
                        </div>

                        {/* ------------- Minimum Quantity -------------- */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input placeholder="Minimum Quantity To Buy" class="input input-bordered" type="number" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Product minimum quantity required'
                                },
                            })} />

                            {/* --- error message ---- */}
                            <label class="label">
                                {errors.quantity?.type === 'required' && <span class="label-text-alt text-red-500">{errors.quantity?.message}</span>}
                            </label>

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Available</span>
                            </label>
                            <input placeholder="Available Product" class="input input-bordered" type="number" {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Product available quantity required'
                                },
                            })} />

                            {/* ----- error message ---- */}
                            <label class="label">
                                {errors.available?.type === 'required' && <span class="label-text-alt text-red-500">{errors.available?.message}</span>}
                            </label>

                        </div>


                        {/* ----------- price ---------------- */}
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input placeholder="Price" class="input input-bordered" type="number" {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Product price required'
                                },
                            })} />

                            {/* ---- error message ----*/}
                            <label class="label">
                                {errors.price?.type === 'required' && <span class="label-text-alt text-red-500">{errors.price?.message}</span>}
                            </label>

                        </div>



                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Photo</span>
                            </label>
                            <input class="input input-bordered" type="file" {...register("img", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                }
                            })} />
                        </div>


                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default AddProduct;