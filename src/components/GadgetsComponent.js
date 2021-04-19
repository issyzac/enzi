import {Image, Card, Button} from 'react-bootstrap'
import moka from '../images/gadgets/moka-pot.jpg'
import grinder from '../images/gadgets/handgrinder.jpeg'
import electricGrinder from '../images/gadgets/electric-grinder.jpg'
import aeropress from '../images/gadgets/aeropress.jpg'

const gadgetCardStyle = {
    marginBottom: '5rem',
}

const gadgetImageStyle = {
    padding: '1rem',
}

const gadgetTextStyle = {
    fontFamily: 'Nunito',
    fontWeight: '500',
    fontSize: '18px',
    textAlign: 'center'
}

const gadgetTextPriceStyle = {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '20px',
    fontFamily: 'Nunito'
}

const addtocartButtonStyle = {
    border: '2px solid #202a44',
    fontVariant: 'all-small-caps',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '0px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
}

function GadgetComponent() {
    return(
        <div className="container" id="shop">
            <div className="d-flex flex-row justify-content-center" style={{ marginTop: '50px' }}>
                <h1 style={{ fontFamily: 'Nunito', fontWeight: '700', color: "#202a44", }}> Coffeeware Shop </h1>
            </div>
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12" style={gadgetCardStyle}>
                        <Card style={{ border: '0' }}>
                            <Card.Img variant="top" src={aeropress} style={gadgetImageStyle}/>
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Aeropress</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>120,000 TSH</Card.Title>
                                <Button variant='outline-dark' style={addtocartButtonStyle} > Add to Cart </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12" style={gadgetCardStyle}>
                        <Card style={{ border: '0' }}>
                            <Card.Img variant="top" src={grinder} style={gadgetImageStyle} />
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Hand Grinder</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>100,000 TSH</Card.Title>
                                <Button variant='outline-dark' style={addtocartButtonStyle} > Add to Cart </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* <div className="col-4" style={gadgetCardStyle}>
                        <Card style={{ border: '0' }}>
                            <Card.Img variant="top" src={moka} style={gadgetImageStyle} />
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Moka Pot</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>140,000 TSH</Card.Title>
                                <Button variant='outline-dark' style={addtocartButtonStyle} > Add to Cart </Button>
                            </Card.Body>
                        </Card>
                    </div> */}
                    <div className="col-md-4 col-xs-12" style={gadgetCardStyle}>
                        <Card style={{ border: '0' }}>
                            <Card.Img variant="top" src={electricGrinder} style={gadgetImageStyle} />
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Electric Grinder</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>200,000 TSH</Card.Title>
                                <Button variant='outline-dark' style={addtocartButtonStyle} > Add to Cart </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {/* <div className="row d-flex flex-row justify-content-center" style={{ marginBottom: '50px' }}>
                    <Button variant='outline-dark' style={addtocartButtonStyle} > Shop All Coffeeware </Button>
                </div> */}
            </div>
        </div>
    )
}

export default GadgetComponent;