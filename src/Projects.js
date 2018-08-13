import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';

const AirJordans = require("/Users/eric/Desktop/portfolio/src/images/AirJordans.jpg")
const FOMO = require('/Users/eric/Desktop/portfolio/src/images/FOMO.jpg')
const RUinn = require('/Users/eric/Desktop/portfolio/src/images/RUinn.png')

const Header = styled.h1`
  position: relative;
  left: 100px;
  -webkit-animation: mymove 3s;
  animation: mymove 3s;
  animation-timing-function: ease;
  margin-bottom: 50px;
`

const Projects = () => (
    <General>
      <Header>What I've Been Doing ...</Header>
      <div className="row">
      <div className="col-sm-4">
        <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src={FOMO} alt="FOMO"/>
      <div className="card-body">
        <h5 className="card-title">FOMO</h5>
        <p className="card-text">
            &#126; Integrated Google strategy authentication using Passport.js to improve sign-in efficiency <br />
            &#126; Built front-end views with React and Bootstrap for mobile-friendly design and increased user accessibility <br />
            &#126; Customized Bootstrap styling with React Components to make a more cohesive front-end view <br />
            &#126; Integrated Eventbrite API using Express and Node.js to render updated events <br />
        </p>
        <button className='btn btn-success' style={{width: '100%', marginBottom: '5px'}}> <i className="fab fa-github fa-2x"></i></button>
        <button className='btn btn-danger' style={{width: '100%'}} onClick={() => {window.location = 'https://youtu.be/VmNPACZ99Rc'}}> <i className="fab fa-youtube fa-2x"></i></button>
        </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src={RUinn} alt="RUinn"/>
      <div className="card-body">
        <h5 className="card-title">RUinn</h5>
        <p className="card-text">
          &#126; Developed modular React front-end views with Bootstrap and Styled Components for production-quality interface <br />
          &#126; Executed parameterized search using Node and Express to efficiently query database <br />
          &#126; Deployed microservice with Docker on AWS(EC2) ​to integrate multiple microservices on a proxy server <br />
        </p>
        <button className='btn btn-success' style={{width: '100%', marginBottom: '5px'}}> <i className="fab fa-github fa-2x"></i></button>
        <button className='btn btn-danger' style={{width: '100%'}} onClick={() => {window.location = 'https://youtu.be/i32lUbn4gXc'}}> <i className="fab fa-youtube fa-2x"></i></button>
        </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src={AirJordans} alt="AirJordans"/>
      <div className="card-body">
        <h5 className="card-title">AirJordans</h5>
        <p className="card-text">
          &#126; Achieved over 1000RPS with 35ms of latency and 0% error rate by horizontally scaling with Nginx as a load balancer <br />
          &#126; Integrated Postgres database due to faster query time of under 0.5ms for better user experience <br />
          &#126; Stress tested maximum RPS and minimum latency using Loader.io to identify efficiency in production scale <br />
          &#126; Optimized PostgreSQL database to query over 10 million records in under 2ms <br />
        </p>
        <button className='btn btn-success' style={{width: '100%'}}> <i className="fab fa-github fa-2x"></i></button>
        </div>
        </div>
      </div>
      </div>
    </General>
  );

  export default Projects;