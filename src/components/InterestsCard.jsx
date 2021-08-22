import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const InterestsCard = ({ data, image }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
								<img style={{ width: "35vh" , height : "60vh", alignSelf: 'center'}} src = {image} />
								<p className="description mt-1">{data.desc}</p>
								<ul>
									{data.descBullets
										? data.descBullets.map((desc) => {
												return <li key={desc}>{desc}</li>;
										})
										: null}
								</ul>
								
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default InterestsCard;
