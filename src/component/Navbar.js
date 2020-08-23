import React from 'react';
import MyNav from "./MyNav";
import {Link} from 'react-router-dom';
import "../styles/navbar.css";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {Navbar, Nav, Form} from "react-bootstrap";
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from "@material-ui/core/InputAdornment";

const Navbars = () => (

    <div className="topnav ">
        <Navbar className="mb-0" expand="lg">
            <Nav.Link href={"/s"}><img  alt="logo" src="/assert/logo.png" className="navbar-logo "/></Nav.Link>
            {/*<Navbar.Brand> <MyNav address="/" isExact={true} label=" سالیاس"/></Navbar.Brand>*/}
            <div className="row">
                <Form inline>
                    <input className="form-control col" type="search" placeholder="جستجو">
                    </input>
                    <IconButton className="iconButton">
                        <SearchIcon className="icon-search"/>
                    </IconButton>
                </Form>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse  id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <MyNav address="/" isExact={true} label="آگهی من"/>
                    <MyNav address="/chat" isExact={true} label="چت"/>
                    <MyNav address="/about" isExact={true} label="درباره ما"/>
                    <MyNav address="/bolg" isExact={true} label="بلاگ"/>
                    <MyNav address="/help" isExact={true} label="پشتیبانی و قوانین"/>
                    <MyNav address="/contact" isExact={true} label="تماس با ما"/>
                    <MyNav address="/new" isExact={true} label="ثبت آگهی"/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);
export default Navbars;