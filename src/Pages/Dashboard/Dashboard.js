import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';



const Dashboard = () => {
    // react firebase hooks
    const [user, loading] = useAuthState(auth);

    // custom react hooks
    const [admin] = useAdmin(user);

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className="drawer drawer-mobile h-full ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-blue-600 font-semibold'>Welcome to Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 lg:bg-transparent text-base-content z-10">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>MyProfile</Link></li>

                    {admin && <>
                        <li><Link to='/dashboard/addOrder'>AddProduct</Link></li>
                        <li><Link to='/dashboard/users'>AllUsers</Link></li>
                        <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                    </>}

                    {
                        (user && !admin) && <>
                            <li><Link to='/dashboard/orders'>MyOrders</Link></li>
                            <li><Link to='/dashboard/review'>MyReview</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;