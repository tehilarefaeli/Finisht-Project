import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
export default function MyAccount() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state);
    }, []);
    return (

        <div>

            <h1>MyAccount</h1>
        </div>





    );
}
