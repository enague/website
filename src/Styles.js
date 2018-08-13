import styled from 'styled-components';
const background = require('/Users/eric/Desktop/portfolio/src/images/cool-background.png')


const General = styled.div`
    background: url(${background}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-style: Arial;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export default General;
    
