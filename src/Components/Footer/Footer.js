import React from 'react';
import { Container } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="bg-color mt-5">
            <Container className="d-flex justify-content-between">
                <div>
                    <h2>Subscribe our newsletter</h2>
                    <input type="email" placeholder="enter your email" />
                    <button className="ms-3">Subscribe</button>
                </div>
                <div>
                    <h2>Download our app</h2>
                    <p>From Playstore</p><p>From Appstore</p>
                </div>
            </Container>
            <Container className="d-flex justify-content-between align-items-center">
                <img style={{width:"120px"}} src="https://i.ibb.co/9wM7jvg/flag.png"/>
                <p>Copyright ©2021 All Rights Reserved.</p>
                <p><small>Terms of use</small><small>Privacy policy</small></p>
            </Container>
        </div>
    );
};

export default Footer;