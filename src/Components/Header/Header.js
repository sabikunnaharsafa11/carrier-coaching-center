import React from 'react';
import logo from './../../images/carrier_logo_28319.jpg'
import { Link, NavLink } from 'react-router-dom';
import('./Header.css')

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-drak shadow p-3 mb-3 bg-body rounded">
            <div className="container d-flex justify-content-between ">
                <div>
                <img className="d-flex justify-content-start"  src={logo} alt="" width="20%" height="10%"/>
                </div>
                <div>
                <div className=" collapse navbar-collapse fs-5" id="navbarSupportedContent">
                      
                <NavLink to="/home" activeClassName="selected"
                    activeStyle={{
                    fontWeight: "bold",
                    color:"black",
                    // textDecoration:'underline'
                  }} className="nav-link" aria-current="page"> Home</NavLink>                        
                            
                <NavLink to="/services"  activeClassName="selected"
                activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                    // textDecoration: 'underline'
                  }} className="nav-link">Services</NavLink>                                                    
                  <NavLink to="/about"  activeClassName="selected"
                activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                    // textDecoration: 'underline'
                  }} className="nav-link" >About</NavLink>
                                              
                 <NavLink to="/contactus"  activeClassName="selected"
                activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                    // textDecoration: 'underline'
                  }} className="nav-link">Contact Us</NavLink>
                          
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;