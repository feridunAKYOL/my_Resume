import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import down from '../../fonts/bottom.png'


const Education = () => {
	return (
			<div className="educationPart" id="education">
				<h1 className="mainHead text-center pt-5"> My Education</h1>
				<Row>
					<Col sm={12} lg={3} className="educationSection">
						<h2>Bogazici University</h2>
						<h6>Istanbul-2006</h6>
						<p className="mt-3">
							Bachelor degree in Mathematics.. In the university we focused on analytical thinking , pure math
							and some programming lessons. This knowledge helps me so much in coding.
						</p>
					</Col>
					<Col sm={12} lg={3} className="educationSection">
						<h2>Istanbul University</h2>
						<h6>Istanbul-2008</h6>
						<p className="mt-3">
							Master degree in education of Mathematics Teacher. In this master program I have learned a lot
							of things about human psychology , communication skills , work evaluation...
						</p>
					</Col>
					<Col sm={12} lg={3} className="HYF-part">
						<h2>Hack Your Future Belgium</h2>
						<h6>Brussel-2020</h6>
						<p className="mt-3">
							In HYF I have stepped in my dream job. In 7 months I have learned HTML5 , CSS3 , Javascript ,
							React , Node.js , SQlite, Bootstrap... I use Git , Github , Visual Studio Code as a tool... In
							this period we have done small projects. At the end we have build a complete final project. One
							of the most important part we have always Github.. So I have a good skills in working in team
							projects.
						</p>
					</Col>
				</Row>
				<div className="down">
						<a href="#skills" >
								<Image src={down} alt="go down" className="downImage"/>
						</a>
					</div>
			</div>
	);
};
export default Education;
