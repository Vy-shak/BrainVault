import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Landing() {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home')
        };
    }, []);

    return (
        <div>
            this is your landing
        </div>
    )
}

export default Landing
