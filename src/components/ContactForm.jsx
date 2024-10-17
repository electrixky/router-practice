import React from 'react';

function ContactForm() {
    return (
        <div>
            <form className="contactForm" action="">
                <input type="text" placeholder={"Name"}/>
                <input type="email" placeholder={"Email"}/>
                <textarea placeholder={"Message"}/>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;