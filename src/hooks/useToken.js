import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // console.log('inside useToken', user);
        const email = user?.user.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://tools-manufacturer-website-server.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.newToken;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
}

export default useToken;