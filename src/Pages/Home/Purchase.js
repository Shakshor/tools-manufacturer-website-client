import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);

    const { productId } = useParams();
    const [tool, setTool] = useState({});

    const { _id, name, img, description, quantity, available, price } = tool;
    // console.log(tool);

    // for single product loading
    useEffect(() => {
        const url = `https://tools-manufacturer-website-server.onrender.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));

    }, [tool]);

    if (user) {
        // console.log(user);
    }

    // quantity of order
    // const handleChange = event => {
    //     const orderQuantity = event.target.value;
    // };

    // 
    const handleOrder = event => {
        event.preventDefault();
        // console.log(event);
        const phoneNumber = event.target.phone.value;
        const address = event.target.address.value;
        const orderQuantity = event.target.quantity.value;
        // console.log(address, phoneNumber, orderQuantity);

        // sending order data to backend
        // creating order object data
        const order = {
            orderId: _id,
            order: name,
            Quantity: parseInt(orderQuantity),
            user: user.email,
            userName: user.displayName,
            phoneNumber,
            address,
            price,
            img: img,
        }

        fetch(`https://tools-manufacturer-website-server.onrender.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data) {
                    toast('Your order is completed');
                    event.target.reset();
                }
            })

    }



    return (
        <div className='max-w-lg mx-auto'>
            {/* --- product info ------- */}
            {/* <h2>Purchase the Item here:{productId}</h2> */}
            <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-emerald-500">{name}</h2>
                    <p >{description}</p>
                    <p className='text-base text-blue-700'>Price:{price}</p>
                    <p >Minimum Order:{quantity}</p>
                    <p >Available:{available}</p>
                </div>
            </div>


            {/* ------ Provided Information of User------- */}
            <div className="form-control w-full max-w-lg bg-base-100 my-10">
                <h2 className='text-2xl text-primary font-semibold text-center my-3 uppercase'>Please Fill The Form</h2>
                <form onSubmit={handleOrder}>
                    <input type="email" value={user?.email} name='email' placeholder="Name" className="input input-bordered input-primary w-full max-w-lg my-2 text-base" required readOnly disabled />
                    <input type="text" value={user?.displayName} name='name' placeholder="Name" className="input input-bordered input-primary w-full max-w-lg my-2 text-base" required readOnly disabled />

                    {/* ------------ Address ---------------- */}
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text text-lg text-primary">Address</span>
                        </label>
                        <input type="text" name='address' placeholder="Address" className="input input-bordered input-primary w-full max-w-lg my-2 text-base" required />
                    </div>

                    {/* ------------ Phone ---------------- */}
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text text-lg text-primary">Phone</span>
                        </label>
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-lg my-2 text-base" required />
                    </div>

                    {/* ------------ Quantity ---------------- */}
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text text-lg text-primary">Order Quantity</span>
                        </label>
                        <input defaultValue={quantity} name='quantity' type="number" min={quantity} max={available} className="input input-bordered input-primary text-center text-xl" placeholder={quantity} required />
                    </div>

                    <div className='text-center'>
                        <input type="submit" className='btn btn-primary w-full max-w-lg mt-10' value='Purchase' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;