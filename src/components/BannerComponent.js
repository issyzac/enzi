import Image from 'react-bootstrap/Image'
import mokart from '../images/banner/mokart.png'
import Flags from 'country-flag-icons/react/3x2'
import blendMockupImage from '../images/blends/blend-mokup-slant.jpeg'

const bannerStyle = {
    paddingTop: '50px',
    paddingBottom: '100px',
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

function BannerComponent(){
    return(
        <div id="#home" className="container" style={bannerStyle}>
            <div className="row">

                <div className="col-md-6 col-sm-12 d-md-none d-lg-none" style={{ marginBottom: "5rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>

                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center" style={{ marginTop: '5rem' }}>
                    <div className="">
                        <h4 style={bannerTextStyle}> Subscribe and relax, we deliver every month </h4>
                    </div>
                    <div className="">
                        <p style={{ textAlign: 'start', fontSize: '24px', fontFamily: 'Nunito', fontWeight: '300', marginTop: '3rems' }}> 
                            Select your favorite coffee, tell us where to bring it and thats it! 
                        </p>
                    </div>
                    <div style={{ textAlign: 'start' }}> 
                        <Flags.TZ title="Tanzania" style={flagsStyle}/>
                        <Flags.UG title="Uganda" style={flagsStyle}/>
                        <Flags.ET title="Ethiopia" style={flagsStyle}/>
                        <Flags.KE title="Kenya" style={flagsStyle}/>
                        <Flags.RW title="Rwanda" style={flagsStyle}/>
                    </div>
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