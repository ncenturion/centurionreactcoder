import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>TIENDA SASA-DISEÑO</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/categoria/Agenda">Agenda</Link>
            <Link to="/categoria/Encuadernacion">Encuadernacion</Link>
            <Link to="/categoria/Identidad de Marca">Identidad de Marca</Link>
            <Link to="/categoria/Carteleria">Carteleria</Link>
            <Link to="/categoria/Tarjeteria">Tarjeteria</Link>
            <Link exact to="Cart">
              <CartWidget />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
