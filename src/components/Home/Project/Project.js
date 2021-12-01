import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const{id,title,description,technology,liveSite,client,server,firstImg,secondImg,thirdImg} = props.project;
    return (
        <div>
            <Col>
                <Card style={{height:'400px'}} className="border-info bg-dark shadow text-center">
                    <Card.Img variant="top" src={firstImg} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title className="mb-4">{title}</Card.Title>
                        <a href={liveSite} target="_blank">
                        <Button className='me-1 text-white' variant="outline-info">Live Site</Button>
                        </a>
                        <Link to=''>
                            <Button className="text-white" variant="outline-info" >Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;