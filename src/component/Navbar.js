import React from 'react';
import MyNav from "./MyNav";
import {Link} from 'react-router-dom';
import "../styles/navbar.css";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
const Navbars = () => (
    <div>
    <nav className=" navbar-expand-sm navbar-light">
        <div className="topnav">
            <Link to="/"> <img alt="logo" src="/assert/logo.png" className="navbar-logo navbar-brand "/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
            <MyNav address="/" isExact={true} label="آگهی من"/>
            <MyNav address="/chat" isExact={true} label="چت" />
            <MyNav address="/about" isExact={true} label="درباره ما" />
            <MyNav address="/bolg" isExact={true} label="بلاگ" />
            <MyNav address="/help" isExact={true} label="پشتیبانی و قوانین" />
            <MyNav address="/contact" isExact={true} label="تماس با ما" />
            <MyNav address="/new" isExact={true} label="ثبت آگهی" />
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="جستجو" aria-label="Search" />
                <IconButton className="iconButton">
                    <SearchIcon/>
                </IconButton>
            </form>
                </div></div>


        </div>
    </nav>




</div>
);
export default Navbars;