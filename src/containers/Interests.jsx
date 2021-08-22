import React from 'react';
import { interests } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";
import InterestsCard from "../components/InterestsCard";
import { Fade } from 'react-reveal';

import int_1_image from '../assets/img/photos/travel.JPG';
import int_2_image from '../assets/img/photos/bball.JPG';

const Interests = () => {
    return ( 
        <section className="section section-lg">
            <Container>
              <Fade bottom duration={1000} distance="40px">
              <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">Interests</h4>
                    </div>
                </div>
                <Row>
                    <InterestsCard data = {interests[0]} image = {int_2_image}/>
                    <InterestsCard data = {interests[1]} image = {int_1_image}/>
                </Row>
                <Row>
                    {/* <InterestsCard data = {projects[2]} image = {proj_3_image}/>
                    <InterestsCard data = {projects[1]} image = {proj_2_image}/> */}
                </Row>
                <Row>
                    {/* <ProjectsCard data = {projects[4]} image = {proj_6_image}/>
                    <ProjectsCard data = {projects[5]} image = {proj_5_image}/> */}
                </Row>
              </Fade>
            </Container>
          </section>
     );
}
 
export default Interests;