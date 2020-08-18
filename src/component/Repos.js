import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import driving from '../projects/drivingLicence.png';
import tic_tac_toe from '../projects/ticTacToe.png';
import budget from '../projects/budget.png';
import album from '../projects/album.png';
import DuckDuckGo from '../projects/DuckDuckGo.png';
import registration from '../projects/registration.png';

 const Repos = () => {
// 	const [ myRepos, setMyRepos ] = useState([]);
// 	useEffect(() => {
// 		const fetchRepos = () => {
// 			return fetch('https://api.github.com/users/feridunAKYOL/repos?per_page=140')
// 				.then((res) => res.json())
// 				.then((data) => data);
// 		};
// 		fetchRepos().then((entries) => {
// 			setMyRepos(entries);
// 		});
// 	}, []);

	return (
		<Container fluid id="projects" className="projects">
			<h1 className="projectHeader mainHead pt-5">My Projects</h1>
			<Row>
				<Col sm={12} md={{ span: 5, offset:1}} lg={{ span: 3 , offset:1}} className="projectSection mt-5">
					<h2>Driving License Exam Test</h2>
					<div className="projectDiv">
						<img src={driving} className="projectImage" alt="driving licence app" />
						<p>
							I have realized that in Denmark, no proper website provides driving license written exam
							samples such that participants can practice their skills beforehand. In this project we
							allow users to do a sample exam, answer a rich subset of yes/no questions that are retrieved
							from a central SQLight database. This project is group work. We use github and git comments
							to follow our tasks.
						</p>
						<div className="button">
							<a
								href="https://github.com/MesutBE/Driving-Licence-App"
								type="button"
								className="btn btn-lg btn-secondary mr-2"
							>
								Code
							</a>
							<a
								href="https://driving-license-app.herokuapp.com/"
								type="button"
								className="btn btn-lg btn-secondary"
							>
								Demo
							</a>
						</div>
					</div>
				</Col>
				<Col sm={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }} className="projectSection mt-5">
					<h2>Tic-Tac-Toe App</h2>
					<div className="projectDiv">
						<img src={tic_tac_toe} className="projectImage" alt="Tic Tac Toe" />
						<p>
							This is a known tic-tac-toe game. Also I added a history part for the user. In addition to
							that, I add some new styles to old versions. Now it is pretty well. Technologies used:
							React, CSS, Javascript
						</p>
						<div className="button">
							<a
								href="https://github.com/feridunAKYOL/TicTacToe"
								type="button"
								className="btn btn-lg btn-secondary mr-2"
							>
								Code
							</a>
							<a
								href="https://feridun-tic-tac-toe.herokuapp.com/"
								type="button"
								className="btn btn-lg btn-secondary"
							>
								Demo
							</a>
						</div>
					</div>
				</Col>
				<Col sm={12} md={{ span: 5, offset:1}} lg={{ span: 3, offset: 1 }} className="projectSection mt-5">
					<h2>The Budget App</h2>
					<div className="projectDiv">
						<img src={budget} className="projectImage" alt="budget app" />
						<p>
							In this project I create a basic budget app. I can store my budget and then save my
							expenses. It is very useful to see my expenses on a page.and also see the balance of your
							budget. Technologies used:HTML, CSS, Javascript
						</p>
						<div className="button ">
							<a
								href="https://github.com/feridunAKYOL/budget-app"
								type="button"
								className="btn btn-lg btn-secondary mr-2"
							>
								Code
							</a>
							<a
								href="https://feridunakyol.github.io/budget-app/"
								type="button"
								className="btn btn-lg btn-secondary"
							>
								Demo
							</a>
						</div>
					</div>
				</Col>
				<Col sm={12} md={{ span: 5, offset: 1 }} lg={{ span: 3 }} className="projectSection mt-5">
					<h2>The Music Store</h2>
					<div className="projectDiv">
						<img src={album} className="projectImage" alt="The Music Store app" />
						<p>
							In this project I have created a web page for a music market. There is a ready music archive
							that is created in sqlite. Namely there is a relational database. I have created a user
							interface by using relations. And I add some ways to create new data , change any data or
							delete the data. Technologies used: Node.js, HTML, CSS, Javascript, SQLite
						</p>
						<div className="button">
							<a
								href="https://github.com/feridunAKYOL/the-musicker"
								type="button"
								className="btn btn-lg btn-secondary mr-2"
							>
								Code
							</a>
							<a
								href="https://themusickk.herokuapp.com/"
								type="button"
								className="btn btn-lg btn-secondary"
							>
								Demo
							</a>
						</div>
					</div>
				</Col>
				<Col sm={12} md={{ span: 5, offset:1 }} lg={{ span: 3, offset: 1 }} className="projectSection mt-5">
					<h2>Clone The Duck Duck Go</h2>
					<div className="projectDiv">
						<img src={DuckDuckGo} className="projectImage" alt="Duck Duck Go" />
						<p>
							In this project I clone the front-end of the duck duck go. This is a good experience as a
							fronted developer. This project is in the beginning of my developer journey. So I use only
							HTML, CSS and Bootstrap to create the same page. Technologies used:HTML, CSS, Bootstrap
						</p>
						<div className="button">
							<a
								href="https://github.com/feridunAKYOL/duck-duck-clone/"
								type="button"
								className="btn btn-lg btn-secondary mr-2"
							>
								Code
							</a>
							<a
								href="https://feridunakyol.github.io/duck-duck-clone/"
								type="button"
								className="btn btn-lg btn-secondary"
							>
								Demo
							</a>
						</div>
					</div>
				</Col>
				<Col sm={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }} className="projectSection mt-5">
					<h2>University Course Registration System</h2>
					<div className="projectDiv">
						<img src={registration} className="projectImage" alt="registration page" />
						<p>
							In this project, a registration form is built such that students can register for a course.
							Then, information of new students is directly stored in a central database. A summary page
							of registered students is built for the admin of the page. Technologies used: Node.js, HTML,
							CSS, Javascript, Json
						</p>
						<div className="button">
							<a
								href="https://github.com/feridunAKYOL/Course-Registration"
								type="button"
								className="btn btn-lg btn-secondary mr-2"
							>
								Code
							</a>
							<a
								href="https://my-application-form.herokuapp.com/"
								type="button"
								className="btn btn-lg btn-secondary"
							>
								Demo
							</a>
						</div>
					</div>
				</Col>
			</Row>
			{/* <Row>
				<Col sm={12} className="m-5">
					<h2>Starred Repos</h2>
					<img src={github} alt="github page" className="githubImage" />
					<ul>
						{myRepos.filter((repo) => repo.stargazers_count > 0).map((repo, key) => (
							<li key={key}>
								<a href={repo.html_url}>{repo.name}</a>
							</li>
						))}
					</ul>
				</Col>
			</Row> */}
		</Container>
	);
};

export default Repos;
