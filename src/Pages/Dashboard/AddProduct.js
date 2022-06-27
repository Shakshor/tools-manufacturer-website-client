import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);

        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((response) => response.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    toast('adding a new item successful.');
                }
            });

    }

    return (
        <div className='mx-auto '>
            <h2 className='text-lg text-blue-600 ml-10'>Add Product</h2>
            <form className='flex flex-column ml-9' onSubmit={handleSubmit(onSubmit)}>
                <div class="card flex-shrink-0  w-full max-w-lg   shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Product Name" class="input input-bordered"  {...register("name", { required: true, maxLength: 20 })} />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text" cols="4" placeholder="Product Description" class="input input-bordered"  {...register("description", { required: true })} />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input placeholder="Minimum Quantity To Buy" class="input input-bordered" type="number" {...register("quantity", { required: true })} />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Available</span>
                            </label>
                            <input placeholder="Available Product" class="input input-bordered" type="number" {...register("available", { required: true })} />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input placeholder="price" class="input input-bordered" type="number" {...register("price", { required: true })} />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Image</span>
                            </label>
                            <input class="input input-bordered" placeholder='Photo URL' type="text" {...register("img")} />
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