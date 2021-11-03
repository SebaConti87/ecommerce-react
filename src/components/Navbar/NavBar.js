import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            {/* <Nav.Link href="#link">Productos</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </nav>
  );
};

export default NavBar;
