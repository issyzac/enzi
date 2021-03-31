import {Navbar, Nav, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.png'

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
    widht: '60px'
}

function SiteHeader() {
    return (
        <Card>
            <Navbar fixed="top" bg="light" expand="lg" style={navbarstyle}>
            <Navbar.Brand href="#home" style={brandStyle} className="d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col">
                        <Image src={logo} fluid style={logoStyle} />
                    </div>
                    <div className="col d-flex flex-column justify-content-center" style={{ lineHeight: '0.9', paddingLeft: '0' }}>
                        <p style={{ margin: '0' }}> Enzi Coffee <br/> Roasters </p>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
                
                <FontAwesomeIcon icon="glass-cheers" />

            </Navbar.Collapse>
            </Navbar>
        </Card>
    );
}

export default SiteHeader;