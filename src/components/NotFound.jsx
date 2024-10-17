import React from 'react';
import {useNavigate} from "react-router-dom";

function NotFound() {

    const navigate = useNavigate()

    return (
        <div>
            <h2>404 | Page not found</h2>
            <button onClick={()=>navigate('/')}>Got to Home page</button>
        </div>
    );
}

export default NotFound;