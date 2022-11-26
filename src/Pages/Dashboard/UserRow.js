import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    // event handler for make admin
    const makeAdmin = () => {
        fetch(`https://tools-manufacturer-website-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    // console.log(data);
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button className="btn btn-xs" >Remove User</button></td>
        </tr >
    );
};

export default UserRow;