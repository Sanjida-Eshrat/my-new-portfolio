import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  banner from '../../../images/rsz_bg-n.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="bg-light m-0 text-white container-fluid "    
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${banner})`,
            // backgroundImage: `url(${banner})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
           }}>
            <Container fluid>
                <div className="text-center container top-banner" style={{paddingTop:'195px',paddingBlockEnd:'180px'}}>
                    <h1 className="pt-4 text-2">Hi! I'm <span style={{color:'#f39792'}}>Sanjida Eshrat</span></h1>
                    <h6>Junior Web Developer (MERN)</h6>
                    <a href="https://drive.google.com/file/d/1ng9SJ6xbfLH8BGwL6hZ3OqkqgS8LBGTt/view?usp=sharing" target="_blank">
                      <Button className='text-white mt-4 mb-3' variant="outline-warning">Download Resume</Button>{' '}
                    </a>
                    <a href="https://www.linkedin.com/in/sanjida-eshrat-7831b11b9/" target="_blank">
                      <Button className='text-white mt-4 mb-3' variant="outline-warning">Linkedin </Button>{' '}
                    </a>
                    
                </div>
            </Container>
        </div> 
    );
};

export default Banner;