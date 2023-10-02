import React, { Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import logo from './k.jpg'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import User_info from "../pages/User_info";
import User_list from "../pages/User_list";
export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />{" "}
                        My Dashboard
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink href="/"> Main </NavLink>
                            <NavLink href="/user_info"> Me </NavLink>
                            <NavLink href="/user_list"> Invited users </NavLink>
                        </Nav>
                        <Form inline>
                            {/*<FormControl type="text" placeholder="Search" className="mr-sm-2"></FormControl>*/}
                            <Button variant="outline-info">Logout</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Main />}/>
                        <Route exact path="/user_info" element={<User_info />}/>
                        <Route exact path="/user_list" element={<User_list />}/>
                    </Routes>
                </Router>
            </>
        );
    }
}