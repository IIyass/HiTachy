import React from 'react';
import { ProjectWrapper, ProjectContainer } from './styles'
import { Link } from 'react-router-dom';
import { Wrapper } from '../../Common/Layout'
import project1 from '../../illustrations/Evoroadrunners.svg'
import project2 from '../../illustrations/Vicharatechnologies.svg'
import project3 from '../../illustrations/CIOWebsite.svg'


const Project = (props) => {
    return <ProjectWrapper id="ourProject"   >
        <ProjectContainer as={Wrapper}>
            <div className="OneProject">
                <h1>Our Projects</h1>
                <img src={project3} alt="img" />
                <Link to="/portfolio">
                    <h2>View All Works</h2>
                </Link>
            </div>
            <div className="TwoProject">
                <div className="Project">
                    <img src={project1} alt="img" />
                </div>
                <div className="Project">
                    <img src={project2} alt="img" />
                </div>
            </div>
        </ProjectContainer>
    </ProjectWrapper>
}
export default Project;