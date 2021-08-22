import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data , image }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
								<a href={data.github}>
									<img style={{ width: "50vh" , height : "25vh", alignSelf: 'center'}} src = {image} />
								</a>
								<p className="description mt-3">{data.desc}</p>
								<ul>
									{data.descBullets
										? data.descBullets.map((desc) => {
												return <li key={desc}>{desc}</li>;
										})
										: null}
								</ul>
								{data.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.github}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
								{data.github2 ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.github2}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
								{data.link ? (
									<Button
										className="btn-icon"
										color="success"
										href={data.link}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-arrow-right mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Demo
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
