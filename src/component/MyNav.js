import React from 'react';
import {NavLink} from "react-router-dom";

const MyNav = (props) => (
    <NavLink className="navbar-item font-iran-sans" activeClassName="navbar-active-item" to={props.address}
             exact={props.isExact ? props.isExact : false}>{props.label}</NavLink>
);

export default MyNav;