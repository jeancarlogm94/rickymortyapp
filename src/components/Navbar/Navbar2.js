import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';

const NavBar2 = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        className="navbar navbar-expand-lg navbar-dark py-2 mb-4"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container className="container">
          <Navbar.Brand href="/">
            <img
              style={{ maxWidth: '180px' }}
              src={Logo}
              alt="Logo de Rick & Morty"
            />
            <span style={{ color: '#08b2c9' }}> App</span>
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <img
              className="banner"
              src="https://preview.redd.it/o6cwlzg3exk41.png?auto=webp&s=eaad71f0c76522a309978bbd65b1a06902e56970"
              alt="banner rick y morty"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/">Characters</Nav.Link>
              <Nav.Link href="/episodes">Episodes</Nav.Link>
              <Nav.Link href="/location">Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar2;
