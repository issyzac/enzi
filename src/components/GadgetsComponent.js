import {Image, Card, Button} from 'react-bootstrap'
import moka from '../images/gadgets/moka-pot.jpg'
import grinder from '../images/gadgets/handgrinder.jpeg'
import electricGrinder from '../images/gadgets/electric-grinder.jpg'
import aeropress from '../images/gadgets/aeropress.jpg'

function GadgetComponent() {
    return(
        <div style={{ height: '500px' }}>
            <div className="d-flex flex-row justify-content-center" style={{ marginTop: '50px' }}>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: '700', color: "#202a44", }}> Gadgets Shop </h2>
            </div>
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div className="col-4">
                        <Card style={{  }}>
                            <Card.Img variant="top" src={aeropress} />
                            <Card.Body>
                                <Card.Title>Aeropress</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{  }}>
                            <Card.Img variant="top" src={grinder} />
                            <Card.Body>
                                <Card.Title>Hand Grinder</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{  }}>
                            <Card.Img variant="top" src={moka} />
                            <Card.Body>
                                <Card.Title>Moka Pot</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default GadgetComponent;