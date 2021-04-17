import Image from 'react-bootstrap/Image'
import mokart from '../images/banner/mokart.png'
import Flags from 'country-flag-icons/react/3x2'
import blendMockupImage from '../images/blends/blend-mokup-slant.jpeg'

const bannerStyle = {
    marginTop: '150px',
    marginBottom: '150px',
    backgroundColor: '#f7f7f7'
}

const bannerTextStyle ={
    fontFamily: 'Nunito',
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

function BannerComponent(){
    return(
        <div id="#home" className="container" style={bannerStyle}>
            <div className="row">
                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                    <div className="">
                        <h4 style={bannerTextStyle}> Coffee, Kahawa, Kaffee, Kofe, Café, Kopi</h4>
                    </div>
                    <div className="">
                        <p style={{ textAlign: 'start', fontSize: '20px', fontFamily: 'poppins', fontWeight: '300' }}> 
                            At <b style={{ backgroundColor: '#202a44', paddingLeft: '5px', color: '#ffffff', marginRight: '5px' }}> enzi </b>  we love coffee and everything that is involved with it, we always go an
                            extra mile to make sure every sip of a cup is a unique experience for our customers </p>
                    </div>
                    <div style={{ textAlign: 'start' }}> 
                        <Flags.TZ title="Tanzania" style={flagsStyle}/>
                        <Flags.UG title="Uganda" style={flagsStyle}/>
                        <Flags.ET title="Ethiopia" style={flagsStyle}/>
                        <Flags.KE title="Kenya" style={flagsStyle}/>
                        <Flags.RW title="Rwanda" style={flagsStyle}/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12" style={{ marginTop: "5rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>
            </div>
        </div>
    )
}

export default BannerComponent;