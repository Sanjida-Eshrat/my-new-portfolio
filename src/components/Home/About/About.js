import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../images/bg-1.jpg';
const About = () => {
    return (
        <div className="container my-5 p-5 w-75 shadow border border-info rounded-3 ">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-2 text-start">
                    <h2>About <span className="text-info" >Me</span></h2>
                    <p>I'm a web developer with a vast array of knowledge in many different front-end and back-end language, responsive frameworks, databases, and best code practices. </p>
                    <a href="https://www.linkedin.com/in/sanjida-eshrat-7831b11b9/" target="_blank">
                      <Button className='text-white mt-2 mb-3 me-1' variant="outline-info"><i className="fab fa-linkedin "></i> Linkedin </Button>
                    </a>
                    <a href="https://github.com/Sanjida-Eshrat" target="_blank">
                      <Button className='text-white mt-2 mb-3' variant="outline-info"><i className="fab fa-github "></i> Github</Button>
                    </a>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={about} alt="" width="250" height="250" className=" rounded-circle border border-3 border-info"/>
                </div>          
            </div>
        </div>
    );
};

export default About;