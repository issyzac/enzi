import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navbarstyle = {
    height: '80px',
    fontFamily: 'Nunito',
    fontWeight: '700',
}

const brandStyle = {
    color: "#202a44"
}

function SiteHeader() {
    return (
        <Navbar bg="light" expand="lg" style={navbarstyle}>
        <Navbar.Brand href="#home" style={brandStyle}>Enzi Coffee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            
            <FontAwesomeIcon icon="glass-cheers" />

        </Navbar.Collapse>
        </Navbar>
    );
}

export default SiteHeader;