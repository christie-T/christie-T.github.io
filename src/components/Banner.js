import {useState} from "react"
import { Container, Row, Col } from "react-bootstrap"; // import container, row, col components from react-bootstrap library
import headerImg from "../assets/img/header-img.svg"; 
import { Mailbox, MailboxFlag } from 'react-bootstrap-icons'; 
import 'animate.css'; // import animate.css library for animations

export const Banner = () => { 

  const [isHovered, setIsHovered] = useState(false); // for icon change on hover ;D
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          
              <div className="headertxt">
                <img src={headerImg} alt="Header Img" class="header-image"/>
                <h1>hello, i'm <span className="christie">christie</span>.</h1> 
                  
                  <p>i like to build things.</p>
                  
                  <p2> I'm a second-year Computer Science student @ YU from Toronto, Canada. Sometimes I build stuff to make life a little easier. Have a look! </p2>
                  
                  <button 
                  
                  onClick={() => window.location.href = 'mailto:christietang23@gmail.com'} 
        
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}
                  >
                  
                  contact me! {isHovered ? <MailboxFlag size={25} /> : <Mailbox size={25} />}

                  </button>

              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

