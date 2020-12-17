import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
export default function MyAccount() {

    const [user, setUser] = useState<any>([])
    useEffect(() => {

        const stringData = localStorage.getItem('user');
        if (stringData) {
            //   const data = JSON.parse(stringData);     ///!!!!!!!לטפל בפונקציה של השרת
            const data = {
                id: 1, email: 'dsgf@sdg.fg',
                firstName: 'rachel',
                lastName: 'gold',
                password: '12346'
            }
            setUser(data);
            console.log(user);

        }
    }, []);


    return (

        <div>

            <h1>MyAccount</h1>
            <h2>Hello to {user.id}</h2>

        </div>





    );
}
