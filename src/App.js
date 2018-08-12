import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from "styled-components"

import Home from "./Home.js"
import About from "./About"
import Projects from "./Projects.js"
import Testimonials from "./Testimonials"
import Resume from "./Resume.js"
import Footer from "./Footer.js"



const NavBar = styled.div`
    background: black;
    font-style: Arial;
`


const App = () => (
  <Router>
    <div>
        <NavBar>
          <nav class="navbar navbar-expand-lg">
              <div class="navbar-brand">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
              </div>
              <div class="navbar-brand">
                <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
              </div>
              <div class="navbar-brand">
                <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>Projects</Link>
              </div>
              <div class="navbar-brand">
                <Link to="/testimonials" style={{ textDecoration: 'none', color: 'white' }}> Testimonials</Link>
              </div>
              <div class="navbar-brand">
                <Link to="/resume" style={{ textDecoration: 'none', color: 'white' }}>Resume</Link>
              </div>
          </nav>
        </NavBar>
        
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/resume" component={Resume} />
      <Footer />

    </div>
  </Router>  
)


export default App;
