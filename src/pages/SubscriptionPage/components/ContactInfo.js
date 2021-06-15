import { Link } from 'react-router-dom';
import { Form, Button, Row , Col, Image } from 'react-bootstrap';

import blendMockupImage from '../../../images/blends/blend-mokup-straight.jpeg'
import '../styles/SubStyle.css'
import { useSubscription, useUser, useUserUpdate } from '../../../contexts/SubscriptionContext';

function ContactInfo(){

    const subscription = useSubscription()
    
    const user = useUser()
    const updateUser = useUserUpdate()

    return(
        <div className="container-fluid" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}> 
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '4rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', 
                        fontSize: '72px', textAlign: 'start', lineHeight: '3rem'}}> 
                        Let's wrap this up!
                    </p>

                    <div className="row">
                        <div className="col-md-6" style={{ textAlign: 'start' }}>
                            <span style={{ 
                                fontSize: '24px',
                                textAlign: 'start',
                                alignContent: 'start',
                                fontFamily: 'Spartan',
                                color: '#202a44',
                                fontWeight: '500',
                                marginBottom: '2rem'
                            }}>
                                Delivery Information
                            </span>

                            <Form style={{ marginTop: '2rem', fontFamily: 'Spartan' }}>
                                <Form.Group as={Row} controlId="formBasicEmail">
                                    <Form.Label column sm="3"> Email </Form.Label>
                                    <Col sm="9">
                                        <Form.Control placeholder="someone@email.com" style={{ paddingTop: '2rem', paddingBottom: '2rem' }} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicPhone">
                                    <Form.Label column sm="3"> Phone </Form.Label>
                                    <Col sm="9">
                                        <Form.Control placeholder="255683321768" style={{ paddingTop: '2rem', paddingBottom: '2rem' }} />
                                    </Col>
                                </Form.Group>

                                {/* First Name */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '3rem' }}>
                                    <Form.Label column sm="3"> First Name </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="First Name" style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                                {/* Last Name */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '1rem' }}>
                                    <Form.Label column sm="3"> Last Name </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="Last Name" style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                                {/* Address */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '1rem' }}>
                                    <Form.Label column sm="3"> Address </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="Address" style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                                {/* City */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '1rem' }}>
                                    <Form.Label column sm="3"> City </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="City" style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                            </Form>
                            <div className="row" style={{ marginTop: '4rem'}}>
                                <div className="col-md-7"> </div>
                                <div className="col-md-5" style={{ padding: '0px !important' }}>
                                    <Link  to="/gadgetsware" style={{ textDecoration: 'none'}}>
                                        <div id="shop-gadget-button" className="shop-gadget-button"> 
                                            <span style={{ fontSize: '16px' }}> Checkout </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>  

                        <div className="col-md-1" style={{ backgroundColor: '' }}></div>
                        
                        <div className="col-md-5">
                            <div className="cointainer" style={{ border: '1px solid #ced4da', borderRadius: '5px', textAlign: 'start', padding: '1rem', backgroundColor: '#f7f7f7' }}>
                                <span style={{ 
                                        fontSize: '16px',
                                        textAlign: 'start',
                                        fontFamily: 'Spartan',
                                        color: '#202a44',
                                        fontWeight: '500',
                                        marginTop: '2rem',
                                        marginBottom: '2rem'
                                    }}>
                                       Your Order Summary
                                </span>
                                <div className="row" style={{ fontFamily: 'Nunito' }}>
                                    <div className="col-md-3" style={{ alignContent: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
                                        <Image src={blendMockupImage} />
                                    </div>
                                    <div className="col-md-6" style={{textAlign: 'start', paddingTop: '2rem' }}>
                                        <span> { subscription.blend } </span>< br />
                                        <span> { subscription.texture } </span>< br />
                                        <span> { subscription.amount } </span>< br />
                                    </div>
                                    <div className="col-md-3" style={{ textAlign: 'end', fontSize: '14px', paddingTop: '2rem' }}>
                                        <span> 35,000 TSH </span>< br />
                                    </div>
                                </div>
                                
                                {/* Line */}
                                <div style={{ height: '.1rem', backgroundColor: '#ced4da', marginTop: '1rem', marginBottom: '1rem' }}></div>

                                <div className="row" style={{ fontFamily: 'Nunito', fontSize: '14px' }}>
                                    <div className="col-md-9"> Subtotal </div>
                                    <div className="col-md-3" style={{ fontSize: '14px', textAlign: 'end'  }}> 
                                        <span> 35, 000TSH </span>
                                    </div>
                                </div>

                                <div className="row" style={{ fontFamily: 'Nunito', fontSize: '14px', marginTop: '1rem' }}>
                                    <div className="col-md-9"> Shipping </div>
                                    <div className="col-md-3" style={{ fontSize: '14px', textAlign: 'end'  }}> 
                                        <span> -- </span>
                                    </div>
                                </div>

                                {/* Line */}
                                <div style={{ height: '.05rem', backgroundColor: '#ced4da', marginTop: '1rem', marginBottom: '1rem' }}></div>

                                <div className="row" style={{ fontFamily: 'Nunito', fontSize: '14px', marginTop: '1rem' }}>
                                    <div className="col-md-9"> Total </div>
                                    <div className="col-md-3" style={{ fontSize: '14px', textAlign: 'end'  }}> 
                                        <span> 35,000 TSH </span>
                                    </div>
                                </div>

                                {/* Line */}
                                <div style={{ height: '.05rem', backgroundColor: '#ced4da', marginTop: '1rem', marginBottom: '1rem' }}></div>

                                <div className="row" style={{ fontFamily: 'Nunito', fontSize: '14px', marginTop: '1rem', marginBottom: '1rem' }}>
                                    <div className="col-md-7"> To be Paid </div>
                                    <div className="col-md-5" style={{ fontSize: '16px', textAlign: 'end', fontWeight: '700', color: '#db7f3b'  }}> 
                                        <span> 35,000 TSH </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;