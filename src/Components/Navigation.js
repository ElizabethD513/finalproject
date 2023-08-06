
import {LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, Container} from 'react-bootstrap'


function Navigation() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Astrology Blog</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/newpost">
                <Nav.Link>New Post</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;

