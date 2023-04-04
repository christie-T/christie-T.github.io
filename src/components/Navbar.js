import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
  
const [expandNavBar, setExpandNavbar] = useState(false);
const location = useLocation();

useLocation(() => {
  setExpandNavbar(false); // set this whenever location changes (closes nav bar)
}, [location]);
  
  return (
    <div className = "navbar" id = {expandNavBar ? "open" : "close"}> 
        <div className = "toggleButton">
            <button> <ReorderIcon /> </button>
        </div>
        <div className = "links">
            <Link to = "/"> Home </Link>
            <Link to = "/aboutme"> About Me </Link>
            <Link to = "/skillsexperience"> Experience </Link>
        </div>
    </div>
  );
}

export default Navbar