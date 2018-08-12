import React from 'react';
import styled from "styled-components";

const Footer_styles = styled.div`
    background: black;
    color: white;
    font-style: Arial;
    min-height: 150px;
    padding: 25px;
`


const Footer = () => (
    <Footer_styles>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div>
                        <div>Feel Free to Contact Me!</div>
                        <div><i class="far fa-envelope"></i>: ennague@gmail.com</div>
                        <div><i class="fas fa-phone"></i>: 650-784-3267</div>
                    </div>
                </div>
                <div class="col-4">
                    <div>
                        <div>Connect With Me!</div>
                        <div><i class="fab fa-linkedin"></i></div>
                        <div><i class="fab fa-twitter-square"></i></div>
                        <div><i class="fab fa-github-square"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </Footer_styles>
)

export default Footer;