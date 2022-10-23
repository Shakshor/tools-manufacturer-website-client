import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';



const Header = () => {
    // react firebase hook
    const [user, loading, error] = useAuthState(auth);

    // loading 
    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myPortfolio'>MyPortfolio</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-primary lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-link hover:no-underline normal-case text-lg lg:text-2xl font-semibold  text-white no-underline  p-0"><span className='text-orange-400 uppercase font-serif'>daily</span>TOOLS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white text-lg">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                {<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </label>}

            </div>
        </div >
    );
};

export default Header;