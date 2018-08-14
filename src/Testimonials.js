import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';

const profile = require('/Users/eric/Desktop/portfolio/src/images/profile.jpg')


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
    className: 'col-sm'
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
`
const Testimonial = styled.div`
  color: white;
`

const Testimonials = () => (
    <General>
      <Header>What People Say About Me ...</Header>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <div className='row'>
          <Userbox>
            <User src={profile}></User>
          </Userbox>
          <div className='col-sm'>
            <Quote> <i className="fas fa-quote-left"></i></Quote>
              <Testimonial> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tellus ut nunc pharetra molestie. Nulla vehicula enim volutpat eleifend consectetur. Donec at lobortis magna. Nullam eleifend lacinia turpis non facilisis. Sed non erat massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin consequat ullamcorper lectus, eu mattis mauris dictum non. Phasellus maximus dignissim libero, eget fringilla urna dictum sit amet. Etiam tempor auctor arcu, ut dignissim velit commodo sit amet. In at convallis urna, a vestibulum ex. Sed diam ipsum, tristique sed placerat vel, consequat at eros. Pellentesque mollis pellentesque risus, in ornare dui porttitor id. 
              </Testimonial>
            <Quote> <i className="fas fa-quote-right"></i> </Quote> <br /> <br />
            <button className='btn btn-light'>@username</button>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <div className='row'>
          <Userbox>
            <User src={profile}></User>
          </Userbox>
          <div className='col-sm'>
            <Quote> <i className="fas fa-quote-left"></i></Quote> 
              <Testimonial>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tellus ut nunc pharetra molestie. Nulla vehicula enim volutpat eleifend consectetur. Donec at lobortis magna. Nullam eleifend lacinia turpis non facilisis. Sed non erat massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin consequat ullamcorper lectus, eu mattis mauris dictum non. Phasellus maximus dignissim libero, eget fringilla urna dictum sit amet. Etiam tempor auctor arcu, ut dignissim velit commodo sit amet. In at convallis urna, a vestibulum ex. Sed diam ipsum, tristique sed placerat vel, consequat at eros. Pellentesque mollis pellentesque risus, in ornare dui porttitor id.  
              </Testimonial>
            <Quote> <i className="fas fa-quote-right"></i> </Quote> <br /> <br />
            <button className='btn btn-light'>@username</button>
          </div>
        </div>
      </div>
    </General>
  );

  export default Testimonials;