import React from 'react'
import {Link} from 'react-router-dom'
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GithubIcon from "@mui/icons-material/GitHub"
import "../styles/Footer.css"


function Footer() {
return (
    <div className = "footer">
        <div className = "socialMedia">
          <Link to= '404'>
            <InstagramIcon />
          </Link>  
          <Link to= 'https://github.com/christie-T'>
            <GithubIcon />
          </Link>
          <Link to = 'https://www.linkedin.com/in/christie-tang-b7690725a/'>
            <LinkedInIcon />
          </Link>
        </div>
    </div>
    )
}

export default Footer;