import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                    <img src={logo} alt="" />
                </div>
            <div className="container">
                <div className="nav-container">
                    <nav className="nav-items">
                        <a href="/home">Home</a>
                        <a href="/Appoint">Appiontment</a>
                        <a href="/contact">Contact</a>
                        <a href="/login">LogIn</a>
                    </nav>
                    <div className="search-container">
                        <input className="input-search" type="text" placeholder="Search Now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;