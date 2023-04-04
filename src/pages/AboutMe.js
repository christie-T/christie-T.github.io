import React from 'react'
import "../styles/AboutMe.css"
import PlayerType from "../playerType"
import PlayerPC from "../playerPC"

function AboutMe() {
  return (
    <div>
    <div className = "skills">
        <h1> Some Cool Things </h1>
          <div className = "item">
            <h2> 154 WPM!!! </h2>
            <div className = "wpmVid"><PlayerType /></div>
            <h3> PC Build </h3>
            <div className = "pcVid"><PlayerPC /></div>
          </div>
        </div>
    </div>
    
  )
}

export default AboutMe;