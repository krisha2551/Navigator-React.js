import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyWebsite
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Button variant="outline-light">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
