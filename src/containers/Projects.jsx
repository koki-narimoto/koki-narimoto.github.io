import React from 'react';
import { projects } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from 'react-reveal';

import proj_1_image from '../assets/img/photos/face_detect.png';
import proj_2_image from '../assets/img/photos/slack_bot.png';
import proj_3_image from '../assets/img/photos/arcade.png';
import proj_4_image from '../assets/img/photos/pacman.png';
import proj_5_image from '../assets/img/photos/t_bas.png';
import proj_6_image from '../assets/img/photos/anata_kake.png';

const Projects = () => {
    return ( 
        <section className="section pb-0 bg-gradient-info my-5">
            <Container>
              <Fade bottom duration={1000} distance="40px">
              <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">Projects</h4>
                    </div>
                </div>
                {/* <Row className="row-grid align-items-center">
                    {
                        projects.map((data, i) => {
                            return <ProjectsCard key={i} data={data} />
                        })
                    }
                </Row> */}
                <Row>
                    <ProjectsCard data = {projects[0]} image = {proj_1_image} />
                    <ProjectsCard data = {projects[3]} image = {proj_4_image}/>
                </Row>
                <Row>
                    <ProjectsCard data = {projects[2]} image = {proj_3_image}/>
                    <ProjectsCard data = {projects[1]} image = {proj_2_image}/>
                </Row>
                <Row>
                    <ProjectsCard data = {projects[4]} image = {proj_6_image}/>
                    <ProjectsCard data = {projects[5]} image = {proj_5_image}/>
                </Row>
              </Fade>
            </Container>
            <br/>
            <br/>
          </section>
     );
}
 
export default Projects;