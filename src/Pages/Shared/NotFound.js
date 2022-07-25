import React from 'react';
import lazyMechanic from '../../assets/images/notFound/lazyMechanic.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div class="hero min-h-screen bg-white mb-10">
            <div class="hero-content flex-col">
                <img src={lazyMechanic} alt="lazy worker" />
                <div className='text-center'>
                    <h1 class="text-7xl font-bold">404</h1>
                    <p class="py-6">Page Not Available.Sorry About That.</p>
                    <button class="btn btn-primary btn-wide mb-5" onClick={() => navigate('/')} >Go Back</button>
                </div>
            </div>
        </div>

    );
};

export default NotFound;