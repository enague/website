import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';
const about = require('/Users/eric/Desktop/portfolio/src/images/about.jpg')

const Textbox = styled.div`
  border-radius: 15px 50px;
  background: white;
  box-shadow: 5px 5px 5px black;
  padding: 50px;

  @media (max-width: 500px) {
    display: none;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const Text = styled.div`
  text-indent: 15px;
`
const Mobiletext = styled.div`
  @media (max-width: 700px) {
    display: block;
  }

  @media (min-width: 700px) {
    display: none;
  }
`

const List = styled.li`
  color: white;
  font-weight: bold;
`

const Header = styled.h1`
    /* Safari 4.0 - 8.0 */
    // @-webkit-keyframes mymove {
    //     from {left: -150px;}
    //     to {float: center;}
    // }

    // @keyframes mymove {
    //     from {left: -150px;}
    //     to {float: center}
    // }

    position: relative;
    float: center;
    -webkit-animation: mymove 3s;
    animation: mymove 3s;
    animation-timing-function: ease;
`

const Skill = styled.button.attrs({
  className: "btn btn-light"
})`
  padding: 7px
  margin: 10px
  box-shadow: 5px 5px 5px black;

`
const SkillFE = Skill.extend`
  &:hover {
    background: #4C48AB;
  }
`

const SkillBE = Skill.extend`
  &:hover {
    background: #9AC0E8;
  }
`
const SkillOther = Skill.extend`
  &:hover {
    background: #C9FDDE;
  }
`
const Skillbox = styled.div.attrs({
  className: 'col-sm'
})`
  
`

const About = () => (
    <General>
      <Header>A Little Bit About Me ...</Header>
        <div className= "row" style={{padding: '50px'}}>
          <div className="col-sm">
            <img src={about} alt="about" style={{height: 'auto', width: '100%', maxWidth: '400px', borderRadius: '50%', margin: 'auto'}}/>
          </div>
          <Textbox className="col-sm-8">
            <Text> I first got into coding when I was in middle school trying to code the best myspace profile that would play my favorite song at the time and include a great design. When I was in college, I was a Webmaster for a Filipino health organization I was a part of. I had to manage the website and make sure the information flowed from our website to our club members and vice versa. After college, I did more self studying in code learning more about full-stack development using Javascript.</Text> <br /> 
	          <Text> As an engineer, I am always thinking about how I can improve the user experience, whether it be how fast a page loads on the back end or how the UI works and looks on the front end.  I recently worked on a personal MVP of mine called FOMO, which is an event app made in React, Node, Express, and MongoDB. In this project, I liked the challenge of being creative on how to manage state as well as how to modularize my components. 
	          Ultimately, I value user experience and working to make a good product even better, and I would like to work with a company who values that as well. </Text>
          </Textbox>
          <Mobiletext>
              <h2>Personal</h2>
              <ul>
                  <List>Started interest in coding during MySpace days </List>
                  <List> Became Webmaster of Filipino Health Organization at UC Davis</List>
                  <List>Self-studied code from college to present </List>
                  <List>Value making beautiful,user-centric UI's </List>
                  <List>When I am not coding, I dance hip-hop on my team Project M in San Francisco </List>
              </ul>
          </Mobiletext>
        </div>
      <h2 style={{padding: '50px'}}>Technical Skills</h2>
      <div className="row" style={{fontSize: '20px', fontStyle: 'Arial', fontWeight: 'bold'}}>
        <Skillbox>
          Front-End
          <ul>
            <SkillFE>Javascript </SkillFE>
            <SkillFE>React </SkillFE>
            <SkillFE>AngularJS </SkillFE>
            <SkillFE>Backbone </SkillFE>
            <SkillFE>Redux </SkillFE>
            <SkillFE>Webpack </SkillFE>
            <SkillFE>Babel </SkillFE>
            <SkillFE>HTML </SkillFE>
            <SkillFE>CSS </SkillFE>
            <SkillFE>Bootstrap </SkillFE>
            <SkillFE>jQuery </SkillFE>
            <SkillFE>Styled Components </SkillFE>
          </ul>
        </Skillbox>
        <Skillbox>
          Back-End
          <ul>
            <SkillBE>Node.js </SkillBE>
            <SkillBE>Express </SkillBE>
            <SkillBE>MySQL </SkillBE>
            <SkillBE>MongoDB </SkillBE>
            <SkillBE>Amazon Web Services </SkillBE>
            <SkillBE>Docker </SkillBE>
            <SkillBE>NGINX </SkillBE>
            <SkillBE>CouchDB </SkillBE>
            <SkillBE>PostgreSQL</SkillBE>
            <SkillBE>Passport.js </SkillBE>
          </ul>
        </Skillbox>
        <Skillbox>
          Other
          <ul>
            <SkillOther>Mocha </SkillOther>
            <SkillOther>Chai </SkillOther>
            <SkillOther>Jest </SkillOther>
            <SkillOther>Enzyme </SkillOther>
            <SkillOther>Git </SkillOther>
            <SkillOther>New Relic </SkillOther>
            <SkillOther>Artillery </SkillOther>
          </ul>
        </Skillbox>
      </div>
    </General>
  );

  export default About;