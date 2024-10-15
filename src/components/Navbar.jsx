import React from 'react';
import logo from '../assets/react.svg'

function Navbar(props) {
    return (
        <div className="navbar">
            <img src={logo} alt="" width={"60px"}/>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Get Started</button>
        </div>
    );
}

export default Navbar;