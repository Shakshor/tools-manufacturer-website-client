import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';



const Dashboard = () => {
    // react firebase hooks
    const [user] = useAuthState(auth);

    // custom react hooks
    const [admin] = useAdmin(user);




    return (
        <div class="drawer drawer-mobile h-full">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-blue-600 font-semibold'>Welcome to Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>MyOrders</Link></li>
                    <li><Link to='/dashboard/profile'>MyProfile</Link></li>
                    <li><Link to='/dashboard/review'>MyReview</Link></li>

                    {admin && <>
                        <li><Link to='/dashboard/addOrder'>AddProduct</Link></li>
                        <li><Link to='/dashboard/users'>AllUsers</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;