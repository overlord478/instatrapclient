import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md" style={{backgroundColor:"#ccc"}}>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link  className="nav-link" to="/image">Image</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
