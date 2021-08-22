import React, {Fragment} from 'react';

import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import code from '../assets/lottie/coding.json';
import webdev from '../assets/lottie/webdev.json';
import communication from '../assets/lottie/team-communication.json';

import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
    return ( 
        <Fade left duration={1000} distance="40px">
            <Container className="text-center my-5 section section-lg">
                <h1 className="h1">{skillsSection.title}</h1>
                <br></br>
                <Row>
                    <Col lg="6">
                        <DisplayLottie animationData={code} />
                        {/* <div>
                            {
                                skillsSection.skills.map(skill => {
                                    return <p key={skill}>{skill}</p>
                                })
                            }
                        </div> */}
                    </Col>
                    <Col lg="6">
                        {/* <p className="h2">{skillsSection.subTitle}</p> */}
                        <br></br>
                        <p className="lead">{skillsSection.sub_prog_title1}</p>
                        <div className="d-flex justify-content-center flex-wrap mb-5">
                            {
                                skillsSection.programmingLanguages.map((skill) => {
                                    return <Fragment key={skill.skillName}>
                                <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                    <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                                </div>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target={skill.skillName}
                                    >
                                    {skill.skillName}
                                </UncontrolledTooltip>
                                    </Fragment>
                                })
                            }
                        </div>
                        <p className="lead">{skillsSection.sub_prog_title2}</p>
                        <div className="d-flex justify-content-center flex-wrap mb-5">
                            {
                                skillsSection.fullStackRelated.map((skill) => {
                                    return <Fragment key={skill.skillName}>
                                <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                    <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                                </div>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target={skill.skillName}
                                    >
                                    {skill.skillName}
                                </UncontrolledTooltip>
                                    </Fragment>
                                })
                            }
                        </div>
                        <p className="lead">{skillsSection.sub_prog_title3}</p>
                        <div className="d-flex justify-content-center flex-wrap mb-5">
                            {
                                skillsSection.software.map((skill) => {
                                    return <Fragment key={skill.skillName}>
                                <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                    <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                                </div>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target={skill.skillName}
                                    >
                                    {skill.skillName}
                                </UncontrolledTooltip>
                                    </Fragment>
                                })
                            }
                        </div>
                    </Col>
                </Row>

                <Row>
                <Col lg="6">
                        <br></br>
                        <p className="lead">{skillsSection.sub_prog_title4}</p>
                        <div className="d-flex justify-content-center flex-wrap mb-5">
                            {
                                skillsSection.languages.map((skill) => {
                                    return <Fragment key={skill.skillName}>
                                <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                    <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                                </div>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="bottom"
                                    target={skill.skillName}
                                    >
                                    {skill.skillName}
                                </UncontrolledTooltip>
                                    </Fragment>
                                })
                            }
                        </div>
                    </Col>
                    <Col lg="6">
                        <DisplayLottie animationData={communication} />
                    </Col>
                </Row>
            </Container>
        </Fade>
     );
}
 
export default Skills;