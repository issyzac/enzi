import {Navbar, Nav, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.png'
import logoWithName from '../images/logo-with-name.png'

const navbarstyle = {
    height: '80px',
    fontFamily: 'Nunito',
    fontWeight: '700',
}

const brandStyle = {
    color: "#202a44",
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px'
}

const logoStyle = {
    height: '60px',
    widht: '40px'
}

function SiteHeader() {
    return (
        <Navbar fixed="top" bg="light" expand="lg" style={navbarstyle}>
            <Navbar.Brand href="#home" style={brandStyle} className="d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col">
                        <Image src={logo} fluid style={logoStyle} />
                    </div>
                    <div className="col d-flex flex-column justify-content-center" style={{ lineHeight: '0.9', paddingLeft: '0', textAlign: 'start' }}>
                        <p style={{ margin: '0' }}> <span style={{ fontSize: '24px', fontFamily: 'Nunito', fontWeight: '900' }}> Enzi </span> <br/> Coffee Roasters </p>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" active>Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
                
                <FontAwesomeIcon icon="glass-cheers" />

            </Navbar.Collapse>
        </Navbar>
    );
}

export default SiteHeader;