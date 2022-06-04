import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState({});

    const { _id, name, img, description, quantity, available, price } = tool;

    const [order, setOrder] = useState('');
    const [agree, setAgree] = useState(false);


    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));

    }, [tool]);

    if (user) {
        // console.log(user);
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event);
        const phoneNumber = event.target.phone.value;
        const address = event.target.address.value;
        // const orderQuantity = event.target.quantity.value;
        // if (orderQuantity < { quantity } || orderQuantity > { available }) {
        //     setAgree(false);
        //     toast('Please Enter Valid Order');
        // }
        console.log(address, phoneNumber);
    }
    const handleOrder = event => {
        const orderQuantity = event.target.quantity.value;
        if (orderQuantity < { quantity } || orderQuantity > { available }) {
            setAgree(false);
            toast('Please Enter Valid Order');
        }
    }

    return (
        <div className='max-w-lg mx-auto'>
            {/* ------ Provided Information of User------- */}
            <div class="form-control w-full max-w-lg bg-base-100 my-10">
                <h2 className='text-xl text-primary font-semibold text-center my-3 uppercase'>Please Fill The Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={user?.email} name='email' placeholder="Name" class="input input-bordered input-primary w-full max-w-lg my-2 text-base" required readOnly disabled />
                    <input type="text" value={user?.displayName} name='name' placeholder="Name" class="input input-bordered input-primary w-full max-w-lg my-2 text-base" required readOnly disabled />
                    <input type="text" name='address' placeholder="Address" class="input input-bordered input-primary w-full max-w-lg my-2 text-base" required />
                    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-lg my-2 text-base" required />
                    <div>
                        <button>+</button>
                        <input type="text" value={order} onInput={event => setOrder(event.target.value)} name='quantity' placeholder="Order Quantity" class="input input-bordered input-primary w-full max-w-lg my-2 text-base" required />
                        <button>-</button>
                    </div>

                    <div className='text-center'>

                        <input type="submit" className='btn btn-primary btn-wide' value='Submit' />

                    </div>
                </form>
            </div>

            {/* --- product info ------- */}

            <h2>Purchase the Item here:{productId}</h2>
            <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-emerald-500">{name}</h2>
                    <p >{description}</p>
                    <p className='text-base text-blue-700'>Price:{price}</p>
                    <p >Minimum Order:{quantity}</p>
                    <p >Available:{available}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-wide">Purchase</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Purchase;