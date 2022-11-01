import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={require('../logo.png')}
            width="110"
            height="60"
            className="d-inline-block align-top"
            alt="Github Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Search Other User</Nav.Link>    
          </Nav>  
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;