import React from 'react'
import {Link} from 'react-router-dom'

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GithubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import "../styles/Home.css"


// h1+ -> header tags
// p -> paragraph tags
// ol -> ordered list



function Home() {
  return (
    <div className = "home">
      <div className = "about">
        <h2>Hi, My Name is Christie</h2>
        <div className = "prompt">
          <p> Undergrad Student pursuing a degree in Computer Science. </p>
          <div className = "socialMedia">
            
          <Link to='https://mail.google.com/mail/?view=cm&source=mailto&to=[christietang23@gmail.com]'>
            <EmailIcon />
          </Link>
          <Link to= 'https://github.com/christie-T'>
            <GithubIcon />
          </Link>
          <Link to = 'https://www.linkedin.com/in/christie-tang-b7690725a/'>
            <LinkedInIcon />
          </Link>

          </div>
        </div>
      </div>
      <div className = "skills">
        <h1>  </h1>
        <ol className = "list">
          <li className = "item1">
            <h2> Languages </h2>
            <span> Java, Python, Javascript, CSS, SQL</span>
          </li>
          <li className = "item2">
            <h2> Tools and Frameworks </h2>
            <span>NodeJS, ReactJS, JUnit, Anvil </span>
          </li>


        </ol>
      </div>
    </div>
  )
}

export default Home;