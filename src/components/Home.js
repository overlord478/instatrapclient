import React from 'react';
import './home.css';
import Register from './Register';
import Login from './Login';

const Home = (props) => {
    return (
        <div className="container">
        <i className="fab fa-instagram"></i> <span>InstaTrap</span>
            <div className="d-flex">
                <div className="flex-fill register">
                    <Register {...props}></Register>
                </div>
                <div className="flex-fill login">
                    <Login {...props}></Login>
                </div>
            </div>   
        </div>
    )
}

export default Home
