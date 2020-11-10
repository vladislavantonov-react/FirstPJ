import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "../../layouts/Home";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap";
import NavDropdown from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";

const NavbarNew = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/about">About</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarNew;
