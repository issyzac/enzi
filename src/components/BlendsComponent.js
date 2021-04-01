import {Card, Button} from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Images
import enziClassicBlendImg2 from '../images/blends/ec002-0.png'
import blendPlaceHolder1 from '../images/blends/blend-placeholder.png'
import blendPlaceHolder2 from '../images/blends/blend-placeholder-two.png'


const blendStyle = {
    backgroundColor: '#202a44' //fff0e6 e8f5ff d6e6ff
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
        <div className="container-fluid" style={blendStyle} id="blends">
            <div className="row" style={{ marginLeft: '7rem', marginRight: '7rem' }}>
                <div class="col-lg-4 col-md-6 col-sm-6" style={blendCardSyle}>
                    <div class="blog__item">
                        <div class="blog__item__text"  style={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '1.5em', textAlign: 'start', paddingBottom: '3rem' }}>
                            <span> <Flags.TZ title="Tanzania" style={flagsStyle}/> </span>
                                <span><img src={blendPlaceHolder2} alt="" style={{ padding: '4rem' }} /> Enzi Mbeya</span>
                                <h5 style={{ fontFamily: 'Nunito' }}> Enzi Classic Mbeya </h5>
                            <a href="index.html#">Order Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" style={blendCardSyle}>
                    <div class="blog__item">
                        <div class="blog__item__text"  style={{ fontFamily: 'Nunito', fontWeight: '700', fontSize: '1.5em', textAlign: 'start', paddingBottom: '3rem' }}>
                            <span> <Flags.TZ title="Tanzania" style={flagsStyle}/> </span>
                                <span><img src={blendPlaceHolder2} alt="" style={{ padding: '4rem' }} /> Enzi Kili</span>
                                <h5 style={{ fontFamily: 'Nunito' }}> Enzi Kili </h5>
                            <a href="index.html#">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '3em' }}>
                    <h1 style={{ fontFamily: 'Nunito', color: '#ffffff', fontWeight: '700' }}>
                        Explore our variety of blends made perfect for every moment
                    </h1>
                    <Button variant="outline-light" style={{ width: '150px', alignSelf: 'center', marginTop: '20px', fontFamily: 'Nunito' }}> View All </Button>
                </div>
            </div>
        </div>
    )
}

export default BlendsComponent;