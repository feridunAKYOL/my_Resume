import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from 'react-bootstrap';

const footer = () => {
	return (
  <>
		<Navbar expand="lg" fixed-bottom bg="dark" className="navbar sticky-top" variant="dark">
			<Navbar.Brand href="#home" >
          &copy; 2020 Feridun Akyol
       </Navbar.Brand> 
		</Navbar>
  </>
	);
};

export default footer;
