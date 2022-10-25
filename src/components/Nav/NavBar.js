import {Link} from "react-router-dom";
import BotonCarrito from './CartWidget'
import './NavBar2.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <div>
          <Navbar variant="warning" expand="lg">
      <Container>
        <Link to={`/`}>
              <img className="brand" src="assets/logoac.svg" alt="AnaCarolina"/>
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="#home">
          <Link className="itemstyle" to={`/`}>Home</Link>
          </Nav.Link>
            <NavDropdown title="Delicias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link className="itemstyle" to={`/category/tortas`}>Tortas</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link className="itemstyle" to={`/category/muffins`}>Muffins</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link className="itemstyle" to={`/category/alfajores`}>Alfajores</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <BotonCarrito/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
          
    
  );
}

export default NavBar;

