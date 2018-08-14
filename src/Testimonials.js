import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';

const kianna = require('/Users/eric/Desktop/portfolio/src/images/kianna.jpg')
const fred = require('/Users/eric/Desktop/portfolio/src/images/fred.jpeg')

const Header = styled.h1`
    position: relative;
    float: center;

    @media (max-width: 700px) {
      font-size: 30px;
    }

    @media (max-width:330px) {
      font-size: 20px;
    }
`
const Userbox = styled.div.attrs({
    className: 'col-sm-6'
})`
    display: flex;
    justify-content: center;
    align-items: center;
`

const User = styled.img`

  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes user {
      0% {border-radius: 50px;}
      100% {border-radius: 50%}
  }

  @keyframes user {
      0% {border-radius: 50px;}
      100% {border-radius: 50%}
  }

    border-radius: 50%;
    height: 200px;
    width: 200px;
    -webkit-animation: user 4s; /* Safari 4.0 - 8.0 */
    animation: user 4s;
`

const Quote = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: black;
  padding: 3px;
`
const Testimonial = styled.div`
  color: white;
`

const Jobdescription = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const Testimonials = () => (
    <General>
      <Header>What People Say About Me ...</Header>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <div className='row'>
          <Userbox>
            <User src={kianna}></User>
          </Userbox>
          <div className='col-sm-3'>
              <Testimonial> 
                <Quote> <i className="fas fa-quote-left fa-xs"></i></Quote>
                  Eric is amazing software engineer. I have worked with him for a while now and he has an great work ethic. He strives to create the best applications and has a keen eye for detail. I would recommend Eric for any web development project you plan on doing!
                  <Quote> <i className="fas fa-quote-right fa-xs"></i> </Quote>
              </Testimonial>
            <br /><Jobdescription> Freelance Full-Stack Engineer </Jobdescription> <br />
            <button className='btn btn-light' onClick={() => {window.open('https://kiannaquach.com')}}>@kiannaquach</button>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <div className='row'>
          <Userbox>
            <User src={fred}></User>
          </Userbox>
          <div className='col-sm-3'>
          <Testimonial> 
                <Quote> <i className="fas fa-quote-left fa-xs"></i></Quote>
                  Eric is amazing software engineer. I have worked with him for a while now and he has an great work ethic. He strives to create the best applications and has a keen eye for detail. I would recommend Eric for any web development project you plan on doing!
                  <Quote> <i className="fas fa-quote-right fa-xs"></i> </Quote>
              </Testimonial>
            <br /> <Jobdescription> Visual Designer @ Google</Jobdescription> <br />
            <button className='btn btn-light' onClick={() => {window.open('https://www.freddierickjohn.com/')}}>@freddierickjohn</button>
          </div>
        </div>
      </div>
    </General>
  );

  export default Testimonials;