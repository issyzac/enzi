import {Navbar, Nav, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.png'
import logoWithName from '../images/logo-with-name.png'
import { Link } from 'react-scroll';

const navbarstyle = {
    height: '80px',
    fontFamily: 'Nunito',
    fontWeight: '700',
    borderBottom: "0.5px solid #202a44",

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
            <Navbar.Brand href="/" style={brandStyle} className="d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col">
                        <Image src={logo} fluid style={logoStyle} />
                    </div>
                    <div className="col d-flex flex-column justify-content-center" style={{ lineHeight: '0.9', paddingLeft: '0', textAlign: 'start' }}>
                        <p style={{ margin: '0' }}> <span style={{ fontSize: '32px', fontFamily: 'Nunito', fontWeight: '500' }}> enzi </span> <br/> 
                        <b style={{ fontWeight: '700', fontFamily: 'Nunito', fontSize: '18px' }}> Coffee Roastery </b> </p>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link activeClass="active" to="#home" spy={true} smooth={true} duration={800}>
                        <Nav.Link href="#">Home</Nav.Link>
                    </Link>
                    <Link activeClass="" to="blends" spy={true} smooth={true} duration={800}>
                        <Nav.Link href="#">About</Nav.Link>
                    </Link>
                    <Link activeClass="" to="shop" spy={true} smooth={true} duration={800}>
                        <Nav.Link href="#">Shop</Nav.Link>
                    </Link>
                    <Link activeClass="" to="footer" spy={true} smooth={true} duration={800}>
                        <Nav.Link href="#">Blog</Nav.Link>
                    </Link>
                </Nav>
                
                <FontAwesomeIcon icon="glass-cheers" />

            </Navbar.Collapse>
        </Navbar>
    );
}

export default SiteHeader;