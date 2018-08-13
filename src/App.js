import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from "styled-components"

import Home from "./Home.js"
import About from "./About"
import Projects from "./Projects.js"
import Testimonials from "./Testimonials"
import Footer from "./Footer.js"



const NavBar = styled.div`
    background: black;
    font-style: Arial;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
      color: #8682BA;
      text-decoration: none;
    }
`;

const Social = styled.div`
    color: white;
    padding: 5px;
`

const Linkedin = Social.extend`
    &:hover {
      color: #3176B0;
    }
`
const Twitter = Social.extend`
    &:hover {
      color: #4AA0EB;
    }
`
const Github = Social.extend`
    &:hover {
      color: #58AE56;
    }
`
const Resume = Social.extend`
    &:hover {
      color: orange;
    }
`


const App = () => (
  <Router>
    <div>
        <NavBar>
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-brand">
                  <StyledLink to="/">Home</StyledLink>
                </div>
                <div className="navbar-brand">
                  <StyledLink to="/about">About</StyledLink>
                </div>
                <div className="navbar-brand">
                  <StyledLink to="/projects">Projects</StyledLink>
                </div>
                <div className="navbar-brand">
                  <StyledLink to="/testimonials"> Testimonials</StyledLink>
                </div>
            </div>
            <div className="navbar-nav ml-auto" style={{display: 'flex', flexDirection: 'row'}}>
                <Linkedin onClick={() => {window.location = 'https://www.linkedin.com/in/eric-nague-523b117b/'}}><i className="fab fa-linkedin fa-2x"></i></Linkedin>
                <Twitter onClick={() => {window.location = 'https://twitter.com/NagueEric?lang=en'}}><i className="fab fa-twitter-square fa-2x"></i></Twitter>
                <Github onClick={() => {window.location = 'https://github.com/enague'}}><i className="fab fa-github-square fa-2x"></i></Github>
                <Resume onClick={()=> {window.location = 'https://docs.google.com/viewerng/viewer?url=https://s3.us-east-2.amazonaws.com/portfolio-ericnague/Eric+Nague+Resume.pdf'}}> <i className="far fa-file-alt fa-2x"></i></Resume>
            </div>
          </nav>
          <div style={{background:'#4A0F6E', height: '30px'}}></div>
        </NavBar>
        
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/testimonials" component={Testimonials} />
      <Footer />

    </div>
  </Router>  
)


export default App;
