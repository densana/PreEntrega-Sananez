import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BotonCarrito from './CartWidget'

function NavBar() {
  return (
    <Navbar classname="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ana Carolina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alfajores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tortas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Muffins</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Catering Fiestas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><BotonCarrito/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
