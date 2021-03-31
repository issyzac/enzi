import {Image} from 'react-bootstrap';
import logo from '../images/logo.png'
import logoWhite from '../images/enzi-logo-white.png'

const footeLogoStyle = {
    height: '120px',
    width: '120px',
    alignSelf: 'center'
}

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about d-flex flex-column justify-content-center">
                            <div className="footer__logo" style={footeLogoStyle}>
                                <a href="index.html#">
                                    <Image src={logoWhite} alt="Enzi logo"/>
                                </a>
                            </div>
                            <p>The customer is at the heart of our unique business model, which includes design.</p>
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
                            <h6>Subscription</h6>
                            <ul>
                                <li><a href="index.html#">Contact Us</a></li>
                                <li><a href="index.html#">Payment Methods</a></li>
                                <li><a href="index.html#">Delivary</a></li>
                                <li><a href="index.html#">Return & Exchanges</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>NewLetter</h6>
                            <div className="footer__newslatter">
                                <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                <form action="index.html#">
                                    <input type="text" placeholder="Your email" />
                                    <button type="submit"><span className="icon_mail_alt"></span></button>
                                </form>
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

export default Footer;