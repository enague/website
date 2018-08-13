import React from 'react';
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';

const StyledFooter = styled.div`
    background: black;
    color: white;
    font-style: Arial;
    min-height: 150px;
    padding: 25px;
`

const Mail = styled.a`
    text-decoration: none;
    color: white;
    margin-right: 20px;
    padding: 5px;

    &:hover {
        color: orange;
    }
`

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

const Footer = () => (
    <div>
        <StyledFooter>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div>
                            <h4>Let's Talk!</h4>
                            <div style={{display: 'flex'}}>
                                <Mail className="mailto" href="mailto:ennague@gmail.com"><i className="far fa-envelope fa-2x"></i></Mail>
                                <Github>
                                <a data-tip data-for="phone">
                                    <i className="fas fa-phone-square fa-2x"></i>
					            </a>
                                    <ReactTooltip id="phone" type="dark" effect="float">
                                        <span>(650) 784-3267</span>
                                    </ReactTooltip>
                                </Github>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div>
                            <h4 style={{marginLeft: '40px'}}>Connect With Me!</h4>
                            <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                                <Linkedin onClick={() => {window.location = 'https://www.linkedin.com/in/eric-nague-523b117b/'}}><i className="fab fa-linkedin fa-2x"></i></Linkedin>
                                <Twitter onClick={() => {window.location = 'https://twitter.com/NagueEric?lang=en'}}><i className="fab fa-twitter-square fa-2x"></i></Twitter>
                                <Github onClick={() => {window.location = 'https://github.com/enague'}}><i className="fab fa-github-square fa-2x"></i></Github>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{padding: '30px', marginLeft: '200px'}}>
                            <button className="btn btn-success" onClick={()=> {window.location = 'https://docs.google.com/viewerng/viewer?url=https://s3.us-east-2.amazonaws.com/portfolio-ericnague/Eric+Nague+Resume.pdf'}}>Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledFooter>
        <div style={{padding: '5px', background: '#B2CEE8', fontSize: '12px', fontStyle: 'italic', fontWeight: 'bold'}}><i className="far fa-copyright"></i> 2018 By Eric Nague. Proudly created by yours truly</div>
    </div>
)

export default Footer;