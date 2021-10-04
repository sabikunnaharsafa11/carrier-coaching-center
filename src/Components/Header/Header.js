import React from 'react';
import logo from './../../images/carrier_logo_28319.jpg'
import { Link, NavLink } from 'react-router-dom';
import('./Header.css')

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-3 bg-body rounded">
            <div className="container d-flex justify-content-between ">
                <div>
                <img className="d-flex justify-content-start"  src={logo} alt="" width="30%" height="20%"/>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ourcourses">OurCourses</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;