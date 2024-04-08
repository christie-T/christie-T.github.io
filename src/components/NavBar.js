import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Banner } from "./Banner";
import { Link, animateScroll as scroll } from 'react-scroll';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>  {/* top-level component (react-router-dom, npm i react-router-dom) to provide routing functionality to all components wrapped */}
      <Navbar expand="md" className={"scrolled"}> {/* from react-bootstrap used to create navbar */}
        <Container> {/* from react-bootstrap, helps contain / wrap navbar content */}          
            <Nav className="ms-auto">
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/"> {/* component from react-bootstrap for logo in navbar */}
            christie-tang
          </Navbar.Brand>

              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>/ home</Nav.Link>
      
              <Nav.Link href="#projects" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>/ projects</Nav.Link>
      
              <Nav.Link href="#about" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>/ about</Nav.Link>

            </Navbar.Collapse>
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/christie-tang-b7690725a/" target="_blank"><img className="nav-icon" src={navIcon1} alt="" /></a>
              <a href="https://github.com/christie-T" target="_blank"><img className="nav-icon" src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/christi3e/" target="_blank"><img className="nav-icon" src={navIcon3} alt="" /></a>
              </div>
            </Nav>
        
        </Container>
      </Navbar>
    </Router>
  )
}

