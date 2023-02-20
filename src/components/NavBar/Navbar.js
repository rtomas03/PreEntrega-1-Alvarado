import './estilos.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CarWidget';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container className="Navegacion">
          <Navbar.Brand href="#home">BurguerFarm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Acerca de Nosotros</Nav.Link>
            </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;