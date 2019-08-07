import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar (props) {
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Search">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;