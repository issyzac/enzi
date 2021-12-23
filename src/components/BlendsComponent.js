import {Card, Button} from 'react-bootstrap'
import './styles/enziStyles.css'

import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


var moka = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/moka-pot-2.jpg?alt=media&token=cdd1d088-9ea6-4a77-b368-d5635cf40a4c"
var grinder  = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/grinder-2.jpg?alt=media&token=002c4fd6-2abf-41f5-a9de-cb056e2c6036"
var aeropress = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/aeropress.jpg?alt=media&token=6460d4b6-0bed-420f-8020-7dfb3e6ab548"

const blendStyle = {
    backgroundColor: '#202a44' //fff0e6 e8f5ff d6e6ff
}

const blendCardSyle = {
    marginTop: '5rem',
    marginBottom: '5rem',
}

const enziButtonStyle = {
    border: '2px solid #ffffff',
    // color: '#ffffff',
    textDecoration: 'none',
    color: '#ffffff',
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
                                        alt="First slide" />
                                    <Carousel.Caption> </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={grinder}
                                        alt="Second slide"/>
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={aeropress}
                                        alt="Third slide"/>

                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                        </div>
                        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center" style={{ padding: '3em' }}>
                            <h1 style={{ fontSize: '3rem', fontFamily: 'Poppins', color: '#ffffff', fontWeight: '700' }}>
                                Good deals on gadgets at our coffeeware shop
                            </h1>
                            <Link className='button enzi-button' variant='outline-light' to="shop/gadgets" style={enziButtonStyle} > Shop Now </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default BlendsComponent;