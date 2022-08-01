import React from 'react';
import lazyMechanic from '../../assets/images/notFound/lazyMechanic.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-white mb-10">
            <div className="hero-content flex-col">
                <img src={lazyMechanic} alt="lazy worker" />
                <div className='text-center'>
                    <h1 className="text-7xl font-bold">404</h1>
                    <p className="py-6">Page Not Available.Sorry About That.</p>
                    <button className="btn btn-primary btn-wide mb-5" onClick={() => navigate('/')} >Go Back</button>
                </div>
            </div>
        </div>

    );
};

export default NotFound;