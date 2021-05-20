import Image from 'react-bootstrap/Image'
import mokart from '../images/banner/mokart.png'
import Flags from 'country-flag-icons/react/3x2'
import blendMockupImage from '../images/blends/blend-mokup-slant.jpeg'
import { Button } from "react-bootstrap";
import "./styles/EnziButton.css"

import { Link } from "react-router-dom";

const bannerStyle = {
    paddingTop: '50px',
    paddingBottom: '120px',
    backgroundColor: '#f7f7f7'
}

const bannerTextStyle ={
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '50px',
    color: '#202a44',
    textAlign: 'start'
}

const flagsStyle = {
    height: '32px',
    width: '32px',
    marginRight: '20px'
}

const enziButtonStyle = {
    border: '2px solid #202a44',
    color: '#202a44',
    // alignSelf: 'center',
    marginBottom: '1rem',
    marginRight: '1rem',
    fontVariant: 'all-small-caps',
    width: '10rem',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '5px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  }

  const signupButtonStyle = {
    border: '2px solid #db7f3b',
    borderRadius: '5px',
    color: '#202a44',
    backgroundColor: '#db7f3b',
    // alignSelf: 'center',
    marginBottom: '1rem',
    marginRight: '1rem',
    fontVariant: 'all-small-caps',
    width: '10rem',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  }

function BannerComponent(){
    return(
        <div id="#home" className="container" style={bannerStyle}>
            <div className="row">

                <div className="col-md-6 col-sm-12 d-md-none d-lg-none" style={{ marginBottom: "5rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>

                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center" style={{ marginTop: '5rem' }}>
                    <div className="">
                        <h4 style={bannerTextStyle}> Subscribe and relax, we deliver every month! </h4>
                    </div>
                    <div className="">
                        <p style={{ textAlign: 'start', fontSize: '24px', fontFamily: 'Inter, sans-serif', fontWeight: '500', marginTop: '3rems' }}> 
                            Select your favorite coffee, tell us where to bring it and thats it! 
                        </p>
                    </div>

                    <div style={{ alignSelf: 'start' }}>
                        <Link to="subscribe">
                            <Button id="sign-up-botton" variant='outline-light' href="https://wa.me/255683321768" style={signupButtonStyle} > Sign Up </Button>
                        </Link>
                        <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > Buy Now </Button>
                    </div>
                    {/* <div style={{ textAlign: 'start' }}> 
                        <Flags.TZ title="Tanzania" style={flagsStyle}/>
                        <Flags.UG title="Uganda" style={flagsStyle}/>
                        <Flags.ET title="Ethiopia" style={flagsStyle}/>
                        <Flags.KE title="Kenya" style={flagsStyle}/>
                        <Flags.RW title="Rwanda" style={flagsStyle}/>
                    </div> */}
                </div>
                <div className="d-md-none col-sm-12" style={{ height: '7rem'}}></div>
                <div className="col-md-6 col-sm-12 d-md-block d-sm-none d-none" style={{ marginTop: "5rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>
            </div>
            <div className="row d-none" style={{ height: '120px' }}></div>
        </div>
    )
}

export default BannerComponent;