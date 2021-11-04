import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className=" p-0">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="my-collapse">
          <Nav>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#home">Contacto</Nav.Link>
            <NavDropdown.Divider />
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
