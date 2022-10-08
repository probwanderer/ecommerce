import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Logo() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Link to="/">
        <Navbar.Brand >React-Shop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Logo;