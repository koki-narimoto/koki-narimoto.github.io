import React from 'react';
import EducationCard from "../components/EducationCard";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { educationInfo } from "../portfolio";
import jp_1_image from '../assets/img/photos/japan_1.png';
import jp_2_image from '../assets/img/photos/japan_2.png';
import sb_1_image from '../assets/img/photos/sb_1.png';
import sb_2_image from '../assets/img/photos/sb_2.png';
import sb_3_image from '../assets/img/photos/sb_3.png';
import sb_4_image from '../assets/img/photos/sb_4.png';
import {
    Container,
    Row,
    Col
} from "reactstrap";

const Edution = () => {
    return ( 
        <section className="section pb-0 bg-gradient-info my-5">
            <Container>
                <div className="d-flex px-3">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-books text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white">Education</h4>
                    </div>
                </div>
                <Row className="row-grid align-items-center">
                    <Col className="order-lg-1" lg="8" >
                        <EducationCard education={educationInfo[1]} />
                    </Col>
                    <Col className="order-lg-1" lg="4" >
                        <div className="slide-container">
                            <Slide>
                                <div className="each-slide" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                                    <img style={{ width: "40vh" , alignSelf: 'center'}} src = {sb_1_image} />
                                </div>
                                <div className="each-slide" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                                    <img style={{ width: "40vh" , alignSelf: 'center'}} src = {sb_2_image} />
                                </div>
                            </Slide>
                        </div>
                    </Col>
                </Row>
                <Row className="row-grid align-items-center">
                    <Col className="order-lg-1" lg="8" >
                        <EducationCard education={educationInfo[0]} />
                    </Col>
                    <Col className="order-lg-1" lg="4" >
                        <div className="slide-container">
                            <Slide>
                                <div className="each-slide" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                                    <img style={{ width: "40vh" , alignSelf: 'center'}} src = {sb_3_image} />
                                </div>
                                <div className="each-slide" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                                    <img style={{ width: "40vh" , alignSelf: 'center'}} src = {sb_4_image} />
                                </div>
                            </Slide>
                        </div>
                    </Col>
                </Row>
                <Row className="row-grid align-items-center">
                    <Col className="order-lg-1" lg="8" >
                        <EducationCard education={educationInfo[2]} />
                    </Col>
                    <Col className="order-lg-1" lg="4" >
                        <div className="slide-container">
                            <Slide>
                                <div className="each-slide" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                                    <img style={{ width: "40vh" , alignSelf: 'center'}} src = {jp_1_image} />
                                </div>
                                <div className="each-slide" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                                    <img style={{ width: "40vh" , alignSelf: 'center'}} src = {jp_2_image} />
                                </div>
                            </Slide>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                {/* <Row>
                    <EdutionCard education={educationInfo[1]} />
                    <br></br>
                    <EdutionCard education={educationInfo[0]} />
                    <br></br>
                    <EdutionCard education={educationInfo[2]} />
                </Row> */}
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
     );
}
 
export default Edution;