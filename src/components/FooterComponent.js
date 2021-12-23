import {Image} from 'react-bootstrap';
import logo from '../images/logo.png'
import logoWhite from '../images/enzi-logo-white.png'

const footeLogoStyle = {
    height: '120px',
    width: '120px',
    alignSelf: 'center'
}

function FooterComponent(){
    return(
        <div className="footer" style={{ backgroundColor: '#202a44' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about d-flex flex-column justify-content-center">
                            <div className="footer__logo" style={footeLogoStyle}>
                                <a href="#">
                                    <Image src={logoWhite} alt="Enzi logo"/>
                                </a>
                            </div>
                            <p>Our love and passion for coffee is what our community is all about.</p>
                            <a href="#"><img src="img/payment.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                        <div className="footer__widget" style = {{ textAlign: 'left', fontFamily: 'Poppins', color: '#FFFFFF' }}>
                            <h6>Shop</h6>
                            <ul>
                                <li><a href="#">Coffee</a></li>
                                <li><a href=" #">Brewing Gadgets</a></li>
                                <li><a href=" #">Enzi Merch</a></li>
                                <li><a href=" #">Sale</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6 style={{ textAlign: 'left' }}> Customise </h6>
                            <p style={{ color: "#FFFFFF", fontFamily: "Poppins", textAlign: 'left' }}>
                                Let us customise your order just as how you prefer 
                                to make sure you enjoy your coffee everyday in your 
                                own unique way. Subscribe and get the delivered exactly as 
                                how you expect it every time!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Contact</h6>
                            <div className="">
                                <p style={{ color: '#FFFFFF', fontFamily: 'Poppins' }} >+255755 688 678 </p>
                                <p style={{ color: '#FFFFFF', fontFamily: 'Poppins' }}>enzicoffee@gmail.com </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="footer__copyright__text">
                            <p> Copyright ©
                                <script> document.write(new Date().getFullYear());</script>
                                2021 All rights reserved | Enzi Coffee Roastery
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;