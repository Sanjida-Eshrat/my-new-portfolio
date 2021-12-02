import React, { useState,useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../hooks/useProjects';

const Details = () => {
    const {projectId} = useParams();
    const [projects] = useProjects();
    const [details, setDetails] = useState({});
   
    useEffect(() =>{
        const matchProject = projects.find(singleProject => singleProject.id ===projectId);
        setDetails(matchProject);
    },[projectId,projects]);


    return (
        <div className="mt-4 mb-5 w-75 mx-auto">
            <div className="mt-5 mb-5">
                <h2 className="">{details?.title}</h2>
                {/* <hr className="w-25 bg-success mx-auto"/> */}
                <Row xs={1} md={3} className="g-4 mt-3 mb-3">
                    <Col>
                        <Card className="border-0 shadow">
                            <Card.Img variant="top" src={details?.firstImg} />
                        </Card>
                    </Col>
                    <Col className="">
                        <Card className="border-0 shadow">
                            <Card.Img variant="top" src={details?.secondImg} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow">
                            <Card.Img variant="top" src={details?.thirdImg} />
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="mt-5 mb-4 text-start">
                <h5 lassName="text-info">Description</h5>
                <p className="fst-italic">{details?.description}</p>
            </div>
            <div className="mt-5 mb-4 text-start">
                <h5 lassName="text-info">Technology</h5>
                <p className="fst-italic">{details?.technology}</p>
            </div>
            <div className="mt-5 mb-4 text-start">
                <a href={details?.liveSite} target="_blank">
                    <Button className='text-white mt-2 mb-3 me-1' variant="outline-info"><i className="fas fa-globe "></i> Live Site</Button>
                </a>
                <a href={details?.client} target="_blank">
                    <Button className='text-white mt-2 mb-3 me-1 ' variant="outline-info"><i className="fab fa-github "></i> Client Side Github </Button>
                </a>
                <a href={details?.server} target="_blank">
                    <Button className='text-white mt-2 mb-3 ' variant="outline-info"><i className="fab fa-github "></i> Server Side Github</Button>
                </a>
            </div>
        </div>
    );
};

export default Details;