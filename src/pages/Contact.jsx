import React from 'react';
import {useNavigate} from "react-router-dom";

function Contact() {

    const navigate = useNavigate()

    return (
        <div>
            <h1 className="contactTitle">Contact page</h1>
            <div className="contactButtons">
                <button onClick={() => navigate('info')}>ContactInfo</button>
                <button onClick={() => navigate('form')}>ContactForm</button>
            </div>
        </div>
    );
}

export default Contact;