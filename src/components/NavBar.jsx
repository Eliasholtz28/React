import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">New Sensation</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/remeras" as={NavLink}>
            Remeras
          </Nav.Link>
          <Nav.Link to="/category/pantalones" as={NavLink}>
            Pantalones
          </Nav.Link>
          <Nav.Link to="/category/camisas" as={NavLink}>
            Camisas
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
