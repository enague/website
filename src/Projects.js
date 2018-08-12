import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';
const AirJordans = require("/Users/eric/Desktop/portfolio/src/AirJordans.jpg")

const Box = styled.div`
  background: white;
  border-radius: 25px;
  padding: 20px; 
  width: 200px;
  height: 150px;
`

const Projects = () => (
    <General>
      <h2>Projects</h2>
      <div>
        <div class="card mb-3">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VmNPACZ99Rc" allowfullscreen></iframe>
          </div> 
      <div class="card-body">
        <h5 class="card-title">FOMO</h5>
        <p class="card-text">
            ● Integrated Google strategy authentication using Passport.js to improve sign-in efficiency
            ● Built front-end views with React and Bootstrap for mobile-friendly design and increased user accessibility
            ● Customized Bootstrap styling with React Components to make a more cohesive front-end view
            ● Integrated Eventbrite API using Express and Node.js to render updated events
        </p>
        </div>
        </div>
      </div>
      <div>
        <div class="card mb-3">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/i32lUbn4gXc" allowfullscreen></iframe>
          </div> 
      <div class="card-body">
        <h5 class="card-title">RUinn</h5>
        <p class="card-text">
          ● Developed modular React front-end views with Bootstrap and Styled Components for production-quality interface
          ● Executed parameterized search using Node and Express to efficiently query database
          ● Deployed microservice with Docker on AWS(EC2) ​to integrate multiple microservices on a proxy server
        </p>
        </div>
        </div>
      </div>
      <div>
        <div class="card mb-3">
        <img class="card-img-top" src={AirJordans} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">AirJordans</h5>
        <p class="card-text">
          ● Achieved over 1000RPS with 35ms of latency and 0% error rate by horizontally scaling with Nginx as a load balancer
          ● Integrated Postgres database due to faster query time of under 0.5ms for better user experience
          ● Stress tested maximum RPS and minimum latency using Loader.io to identify efficiency in production scale
          ● Optimized PostgreSQL database to query over 10 million records in under 2ms
        </p>
        </div>
        </div>
      </div>
    </General>
  );

  export default Projects;