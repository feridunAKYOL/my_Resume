import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Image } from 'react-bootstrap';

const myNavbar = () => {
	return (
		<Navbar expand="lg" fixed-top bg="dark" className="navbar sticky-top" variant="dark">
			<Navbar.Brand href="#home">
				<Image src="./feridun.jpg" roundedCircle width="70vw" />
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#projects">Projects</Nav.Link>
				<Nav.Link href="#contact">Contact</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default myNavbar;
