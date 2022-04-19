import './Header.css';
import Button from 'react-bootstrap/Button';
// import { Image } from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <a className="navbar-brand" href="#"><img src="./bookmyshow logo.png" height="50" alt=""/></a>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movies">All Movies</Nav.Link>
                    <Nav.Link href="/register" >Register</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid style={{background:"black", color:"white",height:"10"}}>
            <nav className="navbar navbar-expand-lg" style={{background:"black", color:"white", width:"100%"}}>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Movies <span className="sr-only"></span></a>
                        <a className="nav-item nav-link" href="#">Stream</a>
                        <a className="nav-item nav-link" href="#">Events</a>
                        <a className="nav-item nav-link" href="#">Plays</a>
                        <a className="nav-item nav-link" href="#">Sports</a>
                        <a className="nav-item nav-link" href="#">Activities</a>
                    </div>
                </div>
            </nav>
        </Container>
    </div>
  );
}

export default App;