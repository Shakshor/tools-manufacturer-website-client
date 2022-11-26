import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false); // (admin/:email) api gives initial value (false) 
    // For data loading
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://tools-manufacturer-website-server.onrender.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    // After completing setAdmin data, then loading will be false.
                    setAdminLoading(false);
                })
        };

    }, [user]);
    return [admin, adminLoading];
}

export default useAdmin;