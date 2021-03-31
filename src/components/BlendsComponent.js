import {Card, Button} from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Images
import enziClassicBlendImg2 from '../images/blends/ec002-0.png'
import blendPlaceHolder1 from '../images/blends/blend-placeholder.png'
import blendPlaceHolder2 from '../images/blends/blend-placeholder-two.png'


const blendStyle = {
    backgroundColor: '#e8f5ff' //fff0e6 e8f5ff d6e6ff
}

const blendCardSyle = {
    marginTop: '5rem',
    marginBottom: '5rem'
}

const flagsStyle = {
    height: '24px',
    width: '24px',
    marginLeft: '10px'
}

const subtitleStyle = {
    color: '#202a44', //202a44 db7f3b  
    fontWeight: '700'
}

function BlendsComponent(){ 
    return (
        <div className="container-fluid" style={blendStyle}>
            <div className="row" style={{ marginLeft: '7rem', marginRight: '7rem' }}>
                <div className="col-md-4">
                    <Card style={blendCardSyle}>
                        <Card.Img variant="top" src={blendPlaceHolder2} style={{ width: '20rem', alignSelf: 'center' }}/>
                        <Card.Body>
                            <div className="" style={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '1.5em', textAlign: 'start' }}>
                                <h5> Enzi Classic Mbeya <span> <Flags.TZ title="Tanzania" style={flagsStyle}/> </span> </h5> 
                                <br />
                                <div className="row" style={{ fontFamily: 'Nunito', fontWeight: '300', fontSize: '0.7em', textAlign: 'start' }}>
                                   <div className="col">
                                   <p> 
                                        <b style={subtitleStyle}> Region </b> <br /> 
                                        <span> Mbeya </span> 
                                    </p> 
                                   </div>
                                   <div className="col">
                                    <p> 
                                        <b style={subtitleStyle}>Notes</b> <br /> 
                                        <span> Citrus, Chocolate, Orange Peel, Sweet </span> 
                                    </p>
                                   </div>
                                </div>
                                <div style={{ fontFamily: 'Nunito', fontWeight: '300', fontSize: '0.7em', textAlign: 'start' }}>
                                    <p> 
                                        <b style={subtitleStyle}>Dubbed</b> <br /> 
                                        <span> Sweetest Taboo! </span> 
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 align-content-center">
                    <Card style={blendCardSyle}>
                        <Card.Img variant="top" src={blendPlaceHolder2} style={{ width: '20rem', alignSelf: 'center' }}/>
                        <Card.Body>
                        <div className="" style={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '1.5em', textAlign: 'start' }}>
                                <h5> Enzi Kili  <span> <Flags.TZ title="Tanzania" style={flagsStyle}/> </span> </h5> 
                                <br />
                                <div className="row" style={{ fontFamily: 'Nunito', fontWeight: '300', fontSize: '0.7em', textAlign: 'start' }}>
                                   <div className="col">
                                   <p> 
                                        <b style={subtitleStyle}> Region </b> <br /> 
                                        <span> Kilimanjaro </span> 
                                    </p> 
                                   </div>
                                   <div className="col">
                                    <p> 
                                        <b style={subtitleStyle}>Notes</b> <br /> 
                                        <span> Citrus, Chocolate, Orange Peel, Sweet </span> 
                                    </p>
                                   </div>
                                </div>
                                <div style={{ fontFamily: 'Nunito', fontWeight: '300', fontSize: '0.7em', textAlign: 'start' }}>
                                    <p> 
                                        <b style={subtitleStyle}>Dubbed</b> <br /> 
                                        <span> Everybody is a morning person! </span> 
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '3em' }}>
                    <h1 style={{ fontFamily: 'Nunito' }}>
                        Explore our variety of blends made perfect for every moment
                    </h1>
                    <Button variant="outline-primary" style={{ width: '150px', alignSelf: 'center', marginTop: '20px', fontFamily: 'Nunito' }}> View All </Button>
                </div>
            </div>
        </div>
    )
}

export default BlendsComponent;