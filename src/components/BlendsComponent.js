import {Card, Button} from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/enziStyles.css'
//Images
import enziClassicBlendImg2 from '../images/blends/ec002-0.png'
import blendPlaceHolder from '../images/blends/blend-mokup-straight.jpeg'
import blendPlaceHolder2 from '../images/blends/blend-placeholder-two.png'

import { Carousel } from 'react-bootstrap'

import moka from '../images/gadgets/moka-pot.jpg'
import grinder from '../images/gadgets/handgrinder.jpeg'
import electricGrinder from '../images/gadgets/electric-grinder.jpg'
import aeropress from '../images/gadgets/aeropress.jpg'


const blendStyle = {
    backgroundColor: '#202a44' //fff0e6 e8f5ff d6e6ff
}

const blendCardSyle = {
    marginTop: '5rem',
    marginBottom: '5rem',
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

const enziButtonStyle = {
    border: '2px solid #ffffff',
    // color: '#ffffff',
    alignSelf: 'center',
    marginTop: '1rem',
    fontVariant: 'all-small-caps',
    width: '10rem',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '0px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  }

function BlendsComponent(){ 
    return (
        <div className="container-fluid" style={blendStyle} id="blends">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="row">
                        <div class="col-md-6 col-sm-12" style={blendCardSyle}>
                            <Carousel style={{ padding: '50px' }}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={moka}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={grinder}
                                    alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                    
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={aeropress}
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                        </div>
                        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center" style={{ padding: '3em' }}>
                            <h1 style={{ fontSize: '3rem', fontFamily: 'Poppins', color: '#ffffff', fontWeight: '700' }}>
                                Good deals on gadgets at our coffeeware shop
                            </h1>
                            <Button variant='outline-light' href="https://wa.me/255683321768" style={enziButtonStyle} > Shop Now </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default BlendsComponent;