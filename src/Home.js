import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';

const profile = require('/Users/eric/Desktop/portfolio/src/images/profile.jpg')

const Header = styled.h1`
    /* Safari 4.0 - 8.0 */
    @-webkit-keyframes mymove {
        from {left: -150px;}
        to {left: 100px;}
    }

    @keyframes mymove {
        from {left: -150px;}
        to {left: 100px;}
    }

    position: relative;
    left: 100px;
    -webkit-animation: mymove 3s;
    animation: mymove 3s;
    animation-timing-function: ease;
`

const Job = styled.h1`
    color: white;
    font-size: 50px;
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
`

const Home = () => (
    <General>
        <div>
            <Header> &lceil;  Hello World, I'm Eric  &rfloor;</Header>
            <img  src={profile} alt="profile" style={{height: '500px', width: '500px', boxShadow: '5px 5px 5px black', marginLeft: '40px'}}/>
            <div class="row">
                <Adj>Passionate</Adj>
                <Adj>Reliable</Adj>
                <Adj>Driven</Adj>
            </div>
            <Job>Full-Stack Software Engineer</Job>
        </div>
    </General>
  );

  export default Home;
  