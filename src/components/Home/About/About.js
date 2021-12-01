import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../images/bg-1.jpg';
const About = () => {
    return (
        <div className="container my-5 p-5 w-75 shadow border-0  rounded-3 " style={{backgroundColor:'rgb(85, 83, 83)'}}>
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-2 text-start">
                    <h2>About <span  style={{color:'#CC2052'}}>Me</span></h2>
                    <p>I'm a web developer with a vast array of knowledge in many different front-end and back-end language, responsive frameworks, databases, and best code practices. </p>
                    <Link to="">
                            <Button className="border-light btn-outline-info"  >Resume</Button>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={about} alt="" className="img-fluid"/>
                </div>          
            </div>
        </div>
    );
};

export default About;