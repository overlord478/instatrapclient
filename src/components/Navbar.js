import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import UserContext from '../Context/UserContext'

const Navbar = () => {

    const usercontext = useContext(UserContext);

    const {userName} = usercontext;

    const onlogout = () =>{

        localStorage.removeItem('x-auth-key');
        window.location.href = "/"
    }

    return (
        <nav className="navbar navbar-light navbar-expand-md" style={{backgroundColor:"#ccc"}}>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link  className="nav-link" to="/image">Image</Link></li>
            </ul>
            <div className="form-inline">
                {userName && <div><i className="fas fa-user"></i> <span className="user">{userName}</span></div>}
            </div>
             <div className="form-inline ml-auto">
                <i className="fas fa-sign-out-alt"></i>
                <button className="btn btn-light btn-sm" onClick={onlogout}>Logout</button>
            </div>
            
        </nav>
    )
}

export default Navbar
