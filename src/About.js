import React from 'react';
import General from './Styles.js';
const about = require('/Users/eric/Desktop/portfolio/src/about.jpg')

const About = () => (
    <General>
      <h1>A Little Bit About Me ...</h1>
      <h2>Personal</h2>
        <div className= "row">
          <div className="col-sm">
            <img src={about} alt="about" style={{height: '300px', width: '300px'}}/>
          </div>
          <div className="col-sm">
            Short Description
          </div>
        </div>
      <h2>Skills</h2>
      <div class="row" style={{fontSize: '20px', fontStyle: 'Arial', fontWeight: 'bold'}}>
        <div class="col-sm">
          Front-End
          <ul>
            <li>Javascript </li>
            <li>React </li>
            <li>AngularJS </li>
            <li>Backbone </li>
            <li>Redux </li>
            <li>Webpack </li>
            <li>Babel </li>
            <li>HTML </li>
            <li>CSS </li>
            <li>Bootstrap </li>
            <li>jQuery </li>
            <li>Styled Components </li>
          </ul>
        </div>
        <div class="col-sm">
          Back-End
          <ul>
            <li>Node.js </li>
            <li>Express </li>
            <li>MySQL </li>
            <li>MongoDB </li>
            <li>Amazon Web Services </li>
            <li>Docker </li>
            <li>NGINX </li>
            <li>CouchDB </li>
            <li>PostgreSQL</li>
            <li>Passport.js </li>
          </ul>
        </div>
        <div class="col-sm">
          Other
          <ul>
            <li>Mocha </li>
            <li>Chai </li>
            <li>Jest </li>
            <li>Enzyme </li>
            <li>Git </li>
            <li>New Relic </li>
            <li>Artillery </li>
          </ul>
        </div>
      </div>
    </General>
  );

  export default About;