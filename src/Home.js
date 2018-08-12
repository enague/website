import React from 'react';
import General from './Styles.js';
import styled from 'styled-components';

const profile = require('/Users/eric/Desktop/portfolio/src/profile.jpg')



const Home = () => (
    <General>
        <div>
            <h1>Hello World, I'm Eric</h1>
            <img  src={profile} alt="profile" style={{height: '500px', width: '500px', boxShadow: '10px 5px 5px #757575'}}/>
            <div class="row" style={{fontSize: '20px', fontStyle: 'Arial', fontWeight: 'bold'}}>
                <div class="col-sm">Passionate</div>
                <div class="col-sm">Reliable</div>
                <div class="col-sm">Driven</div>
            </div>
            <h1>Full-Stack Software Engineer</h1>
        </div>
    </General>
  );

  export default Home;
  