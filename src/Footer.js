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
const Column = styled.div.attrs({
    className: 'row'
})`
    display: flex;
    justify-content: center;
    flex-direction: column
    align-items: center;
    padding: 5px;
`
const Row = Column.extend`
    flex-direction: row;
`

const Footer = () => (
    <div>
        <StyledFooter>
            <div className="container">
                <Row>
                    <div className="col-sm">
                        <Column>
                            <h4>Let's Talk!</h4>
                            <Column>
                                <Mail className="mailto" href="mailto:ennague@gmail.com"><i className="far fa-envelope fa-2x"></i> : ennague@gmail.com</Mail>
                                <Github>
                                <a data-tip data-for="phone">
                                    <i className="fas fa-phone-square fa-2x"></i> : (650) 784-3267
					            </a>
                                    <ReactTooltip id="phone" type="dark" effect="float">
                                        <span>(650) 784-3267</span>
                                    </ReactTooltip>
                                </Github>
                            </Column>
                        </Column>
                    </div>
                    <div className="col-sm">
                        <Column>
                            <h4>Connect With Me!</h4>
                            <Row>
                                <Linkedin onClick={() => {window.open('https://www.linkedin.com/in/eric-nague-523b117b/')}}><i className="fab fa-linkedin fa-2x"></i></Linkedin>
                                <Twitter onClick={() => {window.open('https://twitter.com/NagueEric?lang=en')}}><i className="fab fa-twitter-square fa-2x"></i></Twitter>
                                <Github onClick={() => {window.open('https://github.com/enague')}}><i className="fab fa-github-square fa-2x"></i></Github>
                            </Row>
                        </Column>
                    </div>
                    <div className="col-sm">
                        <Column>
                            <button className="btn btn-success" onClick={()=> {window.open('https://docs.google.com/viewerng/viewer?url=https://s3.us-east-2.amazonaws.com/portfolio-ericnague/Eric+Nague+Resume.pdf')}}>Download Resume</button>
                        </Column>
                    </div>
                </Row>
            </div>
        </StyledFooter>
        <div style={{padding: '5px', background: '#C5C5C5', fontSize: '12px', fontStyle: 'italic'}}><i className="far fa-copyright"></i> 2018 By Eric Nague. Proudly created by yours truly</div>
    </div>
)

export default Footer;