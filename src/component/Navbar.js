import React from 'react';
import MyNav from "./MyNav";

const Navbar = () => (
    <div className="row">
        <div className="col-12">
            <div className="right-dir my-navbar">
                <MyNav address="/" isExact={true} label="سالیاس"/>
                <a href="/"> <img alt="logo" src="/assert/logo.png" className="navbar-logo"/></a>

            </div>
        </div>
        
    </div>
);

export default Navbar;