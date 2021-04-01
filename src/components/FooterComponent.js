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
                                <a href="index.html#">
                                    <Image src={logoWhite} alt="Enzi logo"/>
                                </a>
                            </div>
                            <p>Our love and passion for coffee is what our community is all about.</p>
                            <a href="index.html#"><img src="img/payment.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6>Shop</h6>
                            <ul>
                                <li><a href="index.html#">Coffee</a></li>
                                <li><a href="index.html#">Brewing Gadgets</a></li>
                                <li><a href="index.html#">Enzi Merch</a></li>
                                <li><a href="index.html#">Sale</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6>Just For you</h6>
                            <ul>
                                <li><a href="index.html#">Subscription Bundles</a></li>
                                <li><a href="index.html#">Delivery</a></li>
                                <li><a href="index.html#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Contact</h6>
                            <div className="footer__newslatter">
                                <p><span>Phone</span> +255683321768 </p>
                                <p><span>Email</span> enzicoffee@gmail.com </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="footer__copyright__text">
                            <p> Copyright ©
                                <script> document.write(new Date().getFullYear());</script>
                                2021 All rights reserved | Enzi Coffee Roasters
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;