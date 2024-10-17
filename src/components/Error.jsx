import React from 'react';
import {useNavigate, useRouteError} from "react-router-dom";

function Error() {

    const error = useRouteError()
    const navigate = useNavigate()

    return (
        <div className={"jobDetails"}>
            <h3>An error occurred.</h3>
            <p>{error.message || "Unknown error"}</p>
            <button onClick={() => navigate('/')}>Go to homepage</button>
        </div>
    );
}

export default Error;