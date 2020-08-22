import React from 'react';
import MyNav from "./MyNav";

const Navbar = () => (
    <div className="row">
        <div className="my-navbar">
            <MyNav address="/" isExact={true} label="سالیاس"/>
            <a href="/"> <img alt="logo" src="/assert/logo.png" className="navbar-logo"/></a>
        </div>
    </div>
);
export default Navbar;