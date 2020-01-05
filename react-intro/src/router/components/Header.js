import React from "react"
import {Link} from "react-router-dom"

import AuthButton from "./AuthButton";

function Header() {

    return (
        <header className="light-theme">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/protected">Protected page</Link></li>
            </ul>

            <AuthButton/>
        </header>
    )
}

export default Header