import {Image, Card, Button} from 'react-bootstrap'
import moka from '../images/gadgets/moka-pot.jpg'
import grinder from '../images/gadgets/handgrinder.jpeg'
import electricGrinder from '../images/gadgets/electric-grinder.jpg'
import aeropress from '../images/gadgets/aeropress.jpg'

const gadgetCardStyle = {
    marginBottom: '5rem',
}

const gadgetImageStyle = {
    padding: '3rem',
}

const gadgetTextStyle = {
    fontFamily: 'Nunito',
    fontWeight: '500',
    fontSize: '18px',
    textAlign: 'start'
}

const gadgetTextPriceStyle = {
    textAlign: 'start',
    fontWeight: '700',
    fontSize: '20px',
    fontFamily: 'Nunito'
}

function GadgetComponent() {
    return(
        <div className="container" style={{ }}>
            <div className="d-flex flex-row justify-content-center" style={{ marginTop: '50px' }}>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: '700', color: "#202a44", }}> Gadgets Shop </h2>
            </div>
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div className="col-4" style={gadgetCardStyle}>
                        <Card style={{  }}>
                            <Card.Img variant="top" src={aeropress} style={gadgetImageStyle}/>
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Aeropress</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>150,000 TSH</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4" style={gadgetCardStyle}>
                        <Card style={{  }}>
                            <Card.Img variant="top" src={grinder} style={gadgetImageStyle} />
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Hand Grinder</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>80,000 TSH</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4" style={gadgetCardStyle}>
                        <Card style={{  }}>
                            <Card.Img variant="top" src={moka} style={gadgetImageStyle} />
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Moka Pot</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>100,000 TSH</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4" style={gadgetCardStyle}>
                        <Card style={{  }}>
                            <Card.Img variant="top" src={electricGrinder} style={gadgetImageStyle} />
                            <Card.Body>
                                <Card.Title style={gadgetTextStyle}>Electric Grinder</Card.Title>
                                <Card.Title style={gadgetTextPriceStyle}>200,000 TSH</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row d-flex flex-row justify-content-center">
                    <Button variant="outline-primary" style={{ width: '150px', alignSelf: 'center', marginTop: '50px', marginBottom: '50px', fontFamily: 'Nunito' }}> All Gadgets </Button>
                </div>
            </div>
        </div>
    )
}

export default GadgetComponent;