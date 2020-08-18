import React from 'react';
import {Image} from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import down from '../../fonts/bottom.png'
import react_logo from '../../fonts/react_logo.png';
import node_logo from '../../fonts/nodeJs.png';
import js_logo from '../../fonts/js.png';
import git_logo from '../../fonts/git.png';
import es6_logo from '../../fonts/es6.png';
import aws_logo from '../../fonts/aws.png';
import html_logo from '../../fonts/html.png';
import css_logo from '../../fonts/css.png';
import github_logo from '../../fonts/github.png';

const Skills = () => {
	return (
      <Container fluid className="skills" id="skills">
        <Row className="pt-5">
          <Col sm={12} lg={6} className="soft_skills">
            <h1 className="mainHead "> Computer Skills</h1>
            <ul>
              <li>
                <img src={react_logo} alt="react logo" />
                React
              </li>
              <li>
                <img src={node_logo} alt="node logo" />
                NodeJS
              </li>
              <li>
                <img src={js_logo} alt="javaScript logo" />
                Javascript
              </li>
              <li>
                <img src={aws_logo} alt="AWS logo" />
                AWS
              </li>
              <li>
                <img src={github_logo} alt="gitHub logo" />
                Github
              </li>
              <li>
                <img src={git_logo} alt="git logo" />
                Git
              </li>
              <li>
                <img src={css_logo} alt="CSS logo" />
                CSS3
              </li>
              <li>
                <img src={html_logo} alt="HTML logo" />
                HTML5
              </li>
              <li>
                <img src={es6_logo} alt="ES6 logo" />
                ES6
              </li>
            </ul>
          </Col>
          <Col sm={12} lg={6} className="soft_skills">
            <h1 className="mainHead"> Soft Skills</h1>
            <ul>
              <li>MOTIVATED</li>
              <li>WELL-DISCIPLINED INDIVIDUAL</li>
              <li>ANALYTICAL THINKING</li>
              <li>FAST LEARNER AND LOVE TO LEARN</li>
              <li>TEAM-PLAYER</li>
              <li>RESPONSIBLE</li>
            </ul>
          </Col>
        </Row>
        <div className="down">
              <a href="#projects" >
                  <Image src={down} alt="go down" className="downImage"/>
              </a>
            </div>
      </Container>
	);
};
export default Skills;
