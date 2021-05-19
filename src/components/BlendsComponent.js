import {Card, Button} from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Images
import enziClassicBlendImg2 from '../images/blends/ec002-0.png'
import blendPlaceHolder from '../images/blends/blend-mokup-straight.jpeg'
import blendPlaceHolder2 from '../images/blends/blend-placeholder-two.png'


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
                        <div class="col-md-4 col-sm-12" style={blendCardSyle}>
                            <div class="blog__item">
                                <div class="blog__item__text"  style={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '1.5em', textAlign: 'start', paddingBottom: '3rem', backgroundColor: '#f7f7f7' }}>
                                    <span> <Flags.TZ title="Tanzania" style={flagsStyle}/> </span>
                                        <span><img src={blendPlaceHolder} alt="" /> Enzi</span>
                                        <h5 style={{ fontFamily: 'Nunito' }}> Enzi </h5>
                                    <a href="https://wa.me/255683321768">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12" style={blendCardSyle}>
                            <div class="blog__item">
                                <div class="blog__item__text"  style={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '1.5em', textAlign: 'start', paddingBottom: '3rem', backgroundColor: '#f7f7f7' }}>
                                    <span> <Flags.TZ title="Tanzania" style={flagsStyle}/> </span>
                                        <span><img src={blendPlaceHolder} alt=""/> Enzi Lite</span>
                                        <h5 style={{ fontFamily: 'Nunito' }}> Enzi Lite </h5>
                                    <a href="https://wa.me/255683321768">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center" style={{ padding: '3em' }}>
                            <h1 style={{ fontFamily: 'Nunito', color: '#ffffff', fontWeight: '700' }}>
                                Explore our variety of blends made perfect for every moment
                            </h1>
                            <Button variant='outline-light' href="https://wa.me/255683321768" style={enziButtonStyle} > Shop Enzi </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default BlendsComponent;