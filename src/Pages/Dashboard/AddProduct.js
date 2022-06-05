import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleOrder = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const image = event.target.image.value;

        // send the data to the server
        const order = {
            name,
            quantity,
            price,
            image
        }
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast('adding a new item successful.');
                }
            });

    }

    return (
        <div className='mx-auto ml-20'>
            <h2 className='text-xl font-semibold text-blue-600'>Add Product</h2>
            <form onSubmit={handleOrder}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add product</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;