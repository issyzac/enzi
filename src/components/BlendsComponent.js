import {Card} from 'react-bootstrap'
import enziClassicBlendImg from '../images/blends/ec001.png'
import enziClassicBlendImg2 from '../images/blends/ec002.jpg'

const blendStyle = {
    backgroundColor: '#fff0e6' //fff0e6 e8f5ff
}

const blendCardSyle = {
    marginTop: '5rem',
    marginBottom: '5rem'
}

function BlendsComponent(){ 
    return (
        <div className="container-fluid" style={blendStyle}>
            <div className="row" style={{ marginLeft: '7rem', marginRight: '7rem' }}>
                <div className="col-md-4">
                    <Card style={blendCardSyle}>
                        <Card.Img variant="top" src={enziClassicBlendImg} />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 align-content-center">
                    <Card style={blendCardSyle}>
                        <Card.Img variant="top" src={enziClassicBlendImg2} />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default BlendsComponent;