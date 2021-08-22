import React, {useState, createRef} from "react";
import { Card, CardBody, Badge } from "reactstrap";

import ColorThief from "colorthief";

import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							<p className="description mt-3">{education.desc}</p>
							{education.awards && <h6>{education.awards}</h6>}
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
							{education.extracurriculars && <h6>{education.extracurriculars}</h6>}
							<ul>
								{education.extraBullets
									? education.extraBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									  
									: null}
							</ul>
							{education.relevantCoursework && <h6>{education.relevantCoursework}</h6>}
							<ul>
								{education.courses
									? education.courses.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									  
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EducationCard;
