import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Row , Col, Image } from 'react-bootstrap';

import blendMockupImage from '../../../images/blends/blend-mokup-straight.jpeg'
import '../styles/SubStyle.css'
import { useSubscription, useUser, useUserUpdate } from '../../../contexts/SubscriptionContext';

import {pushToNode, pushUserInformation} from '../services/Usesubscription';

function ContactInfo({url}){

    const subscription = useSubscription()
    
    const [validated, setValidated] = useState(false)
    const [toCheckout, setToCheckout] = useState(false)

    const user = useUser()
    const updateUser = useUserUpdate()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        if (form.checkValidity() === false){    
            event.stopPropagation()
        }else{
            const phone = form[0].value
            const fullname = form[1].value
            const address = form[2].value
            const city = form[3].value

            user.fullName = fullname
            user.phone = phone
            user.address = address
            user.city = city

            updateUser(user)

            pushUserInformation(user)

            setToCheckout(true)

        }
    }

    return(
        toCheckout ? <Redirect to={`${url}/checkout`} /> 
        : 
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
                                Contact Information
                            </span>

                            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginTop: '2rem', fontFamily: 'Spartan' }} >
                                
                                {/* <Form.Group as={Row} controlId="formBasicEmail">
                                    <Form.Label column sm="3"> Email </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            placeholder="someone@email.com" 
                                            style={{ paddingTop: '2rem', paddingBottom: '2rem' }} />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide an email to reach you.
                                    </Form.Control.Feedback>
                                </Form.Group> */}

                                <Form.Group as={Row} controlId="formBasicPhone">
                                    <Form.Label column sm="3"> Phone </Form.Label>
                                    <Col sm="9">
                                        <Form.Control 
                                            required 
                                            placeholder="255683321768" 
                                            style={{ paddingTop: '2rem', paddingBottom: '2rem' }} />
                                    </Col>
                                </Form.Group>

                                <h3 style={{ 
                                    fontSize: '24px',
                                    textAlign: 'start',
                                    alignContent: 'start',
                                    fontFamily: 'Spartan',
                                    color: '#202a44',
                                    fontWeight: '500',
                                    marginTop: '3rem'
                                }}>
                                    Delivery Information (Optional)
                                </h3>
                                {/* First Name */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '2rem' }}>
                                    <Form.Label column sm="3"> Full Name </Form.Label>
                                    <Col sm="9">
                                        <Form.Control 
                                            type="text" 
                                            name="Fullname"
                                            placeholder="Full Name" 
                                            style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                                {/* Address */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '1rem' }}>
                                    <Form.Label column sm="3"> Address </Form.Label>
                                    <Col sm="9">
                                        <Form.Control 
                                            type="text" 
                                            name="Address"
                                            placeholder="Address" 
                                            style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                                {/* City */}
                                <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '1rem' }}>
                                    <Form.Label column sm="3"> City </Form.Label>
                                    <Col sm="9">
                                        <Form.Control 
                                            type="text" 
                                            name="City"
                                            placeholder="City" 
                                            style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                                    </Col>
                                </Form.Group>

                                <div className="row" style={{ marginTop: '4rem'}}>
                                    <div className="col-md-7"> </div>
                                    <div className="col-md-5" style={{ padding: '0px !important' }}>
                                        <Button type="submit" style={{ textDecoration: 'none', backgroundColor: '#fff', borderColor: '#fff'}}>
                                            <div id="shop-gadget-button" className="shop-gadget-button"> 
                                                <span style={{ fontSize: '16px' }}> Checkout </span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>

                            </Form>
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