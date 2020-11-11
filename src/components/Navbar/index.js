import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.scss"

const NavbarNew = () => {

    return (
        <div className={styles.classNavbar}>
            <Navbar bg="light" expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div>
                        <NavLink className={styles.classNavbar__classStart} to="/">Start Store  </NavLink>
                    </div>
                    <div className={styles.classNavbar__classOther}>
                        <NavLink to="/dashboard">Sign up</NavLink>
                        <NavLink to="/about">Sign in</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarNew;
