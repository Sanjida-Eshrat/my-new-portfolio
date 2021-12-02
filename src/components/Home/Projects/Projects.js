import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useProjects from '../../../hooks/useProjects';
import Project from '../Project/Project';

const Projects = () => {
    const [projects] = useProjects();

    return (
        <div className="m-0 pb-3">
            <div className="container">
            <h2 className="text-center py-3">My <span className="text-info">Projects</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </Row>
            </div>
            
        </div>
    );
};

export default Projects;