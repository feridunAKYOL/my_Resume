import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ContactPart = () => {
	return (
		<Container fluid className="contact-part" id="contact">
			<Row className="contact_sections">
				<Col className="contact_sec">
					<Row>
						<Col xs={1}>
							<i className="fas fa-home contacts-i mt-3" />
						</Col>
						<Col xs={3}>
							<p className="contacts mt-1">Mailing Address</p>
						</Col>
						<Col>
							<p className="mt-3">
								Borgloon, Limburg
								<br />
							</p>
						</Col>
					</Row>
				</Col>
				<Col className="contact_sec">
					<Row>
						<Col xs={1}>
							<i className="fas fa-envelope contacts-i" />
						</Col>
						<Col xs={2}>
							<p className="contacts">Email</p>
						</Col>
						<Col>
							<p>
								<a href="/">feridunakyol34@gmail.com</a>
							</p>
						</Col>
					</Row>
				</Col>
				<Col className="contact_sec">
					<Row>
						<Col md={1}>
							<i className="fas fa-phone contacts-i" />
						</Col>
						<Col md={2}>
							<p className="contacts">Phone</p>
						</Col>
						<Col>
							<p>(0486) 05-45-27</p>
						</Col>
					</Row>
				</Col>
				<Col className="contact_sec">
					<Row>
						<Col xs={1}>
							<i className="fas fa-comment contacts-i" />
						</Col>
						<Col md={3}>
							<p className="contacts">Social</p>
						</Col>
						<Col>
							<p>
								<a href="https://www.linkedin.com/in/feridun-akyol-0261261b2">
									<i className="fab fa-linkedin contacts-i" style={{ fontSize: '36px' }} />
								</a>
								<a href="https://github.com/feridunAKYOL">
									<i class="fab fa-github-square contacts-i" style={{ fontSize: '36px' }} />
								</a>
							</p>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactPart;
