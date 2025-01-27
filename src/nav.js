
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Nav2() {
  return (
    <>
      {/* nav bar from bootstap */}

      <Navbar bg="light" expand="lg">
        <img src={require('./money.jpg')} alt='error' id='logo' />

        <Container fluid>

          <Navbar.Brand href="#/Home" id='navhead'><h3>BAD BANK</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '150px',marginLeft:'55em' }}
              
              navbarScroll
            >
              <Nav.Link href="#/Create" id='navbar'>Create</Nav.Link>
              <Nav.Link href="#/Deposit" id='navbar'>Deposit</Nav.Link>
              <Nav.Link href="#/Withdraw" id='navbar'>Withdraw</Nav.Link>
              <Nav.Link href="#/Alldata" id='navbar'> View AllData</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}