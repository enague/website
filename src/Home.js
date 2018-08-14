import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';

const profile = require('/Users/eric/Desktop/portfolio/src/images/profile.jpg')

const Header = styled.h1`
    position: relative;
    float: center;

    @media (max-width: 700px) {
        font-size: 30px
    }

    @media (max-width:300px) {
        font-size: 15px;
    }
`

const Job = styled.h1`
    color: white;
    font-size: 50px;

    @media (max-width: 700px) {
        font-size: 30px;
    }

    @media (max-width:330px) {
        font-size: 15px;
    }
`


const Adj = styled.div.attrs({
    className: "col-sm"
})`
    @keyframes shake {
        10%, 90% {
        transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
        transform: translate3d(2px, 0, 0);
        }
    
        30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
        }
    
        40%, 60% {
        transform: translate3d(4px, 0, 0);
        }
    }

    font-size: 30px;
    font-style: Arial;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @media (max-width: 700px) {
        font-size: 20px
    }
`

const Home = () => (
    <General>
        <Header> &lceil;  Hello World, I'm Eric  &rfloor;</Header>
        <img  src={profile} alt="profile" style={{height: 'auto', width: '100%', maxWidth: '500px', boxShadow: '5px 5px 5px black'}}/>
        <div className="row">
            <Adj>Passionate</Adj>
            <Adj>Reliable</Adj>
            <Adj>Driven</Adj>
        </div>
        <Job>Full-Stack Software Engineer</Job>
    </General>
  );

  export default Home;
  