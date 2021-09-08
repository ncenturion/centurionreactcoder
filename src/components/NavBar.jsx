
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'


const NavBar =()=>{
    return(
        <> 
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">TIENDA SASA-DISEÑO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Agendas</Nav.Link>
            <Nav.Link href="#features">Encuadernacion</Nav.Link>
            <Nav.Link href="#pricing">Identidad de Marca</Nav.Link>
            <Nav.Link href="#pricing">Carteleria</Nav.Link>
            <Nav.Link href="#pricing">Tarjeteria</Nav.Link>
            < CartWidget />
          </Nav>
          </Container>
         
        </Navbar>
   
      
        </>
        ) 
    
}
export default NavBar