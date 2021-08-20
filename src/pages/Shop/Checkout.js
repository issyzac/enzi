import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Row , Col, Image } from 'react-bootstrap';
import blendMockupImage from '../../images/blends/blend-mokup-straight.jpeg'

import { useSelectedCoffee, useDeliveryInformation, useUpdateDeliveryInformation } from '../../contexts/ShopContext'
import { useUser } from '../../contexts/SubscriptionContext'

import pushShoppedItem from './services/ShopService';

export default function CheckoutShop({url}){


    const [validated, setValidated] = useState(false)
    const [toDone, setToDone] = useState(false)

    let coffeeOrder = { }

    const selectedCoffee = useSelectedCoffee()
    const deliveryInformation = useDeliveryInformation()
    const updateDeliveryInformation = useUpdateDeliveryInformation()

    const user = useUser()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        if (form.checkValidity() === false){    
            event.stopPropagation()
        }else{

            const email = form[0].value
            const phoneNumber = form[1].value

            const fullName = form[2].value
            const address = form[3].value
            const city = form[4].value

            deliveryInformation.email = email
            deliveryInformation.phone = phoneNumber
            deliveryInformation.fullName = fullName
            deliveryInformation.address = address
            deliveryInformation.city = city
            deliveryInformation.userReference = user.userReference

            updateDeliveryInformation(deliveryInformation)

            //Combine selected coffee and deliver information into a single object
            coffeeOrder = {
                selectedCoffee, 
                deliveryInformation,
                orderDate: new Date()
            }

            pushShoppedItem(user, coffeeOrder)

            setToDone(true)

        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


      /**
       * This section captures user delivery and contact information
       */
      function FormSection(){

        /**
         * Client Contact Information sub section
         */
        function ContactSection(){
            return(
                <div>
                    <Form.Group as={Row} controlId="formBasicEmail">
                        <Form.Label column sm="3"> Email </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                placeholder="someone@email.com" 
                                style={{ paddingTop: '2rem', paddingBottom: '2rem' }} />
                        </Col>
                        <Form.Control.Feedback type="invalid">
                            Please provide an email to reach you.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPhone" style={{ marginBottom: '4rem' }}>
                        <Form.Label column sm="3"> Phone </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                required 
                                placeholder="255683321768" 
                                style={{ paddingTop: '2rem', paddingBottom: '2rem' }} />
                        </Col>
                    </Form.Group>
                </div>
            )
        }

        /**
         * Delivery Information Section
         */
        function DeliverySection(){
            return(
                <>
                    <span style={{ 
                        fontSize: '24px', textAlign: 'start', alignContent: 'start', fontFamily: 'Spartan', color: '#202a44', fontWeight: '500',paddingTop: '4rem',}}>
                        How can we reach you!
                    </span>
                    {/* Full Name */}
                    <Form.Group as={Row} controlId="formBasicPhone" style={{ marginTop: '2rem' }}>
                        <Form.Label column sm="3"> Full Name </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                type="text" 
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
                                placeholder="City" 
                                style={{ paddingTop: '30px', paddingBottom: '30px' }} />
                        </Col>
                    </Form.Group>
                </>
            )
        }

        /**
         * SUBMIT button Element
         */
        function SubmitButton(){
            return(
                <div>
                    <div className="row" style={{ marginTop: '4rem'}}>
                        <div className="col-md-7"> </div>
                        <div className="col-md-5" style={{ padding: '0px !important' }}>
                            <Button type="submit" style={{ textDecoration: 'none', backgroundColor: '#fff', borderColor: '#fff', width: '100%', padding: '0px'}}>
                                <div id="shop-gadget-button" className="shop-gadget-button"> 
                                    <span style={{ fontSize: '16px' }}> Checkout </span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            )
        }

          return(
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginTop: '2rem', fontFamily: 'Spartan' }} >
                <ContactSection />
                <DeliverySection />
                <SubmitButton />
            </Form>
          )
    }

    function OrderSummarySection(){
        return(
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
                        <span> { selectedCoffee.blend } </span>< br />
                        <span> { selectedCoffee.grind } </span>< br />
                        <span> { selectedCoffee.quantity } </span>< br />
                    </div>
                    <div className="col-md-3" style={{ textAlign: 'end', fontSize: '14px', paddingTop: '2rem' }}>
                        <span> { selectedCoffee.price } TSH </span>< br />
                    </div>
                </div>
                
                {/* Line */}
                <div style={{ height: '.1rem', backgroundColor: '#ced4da', marginTop: '1rem', marginBottom: '1rem' }}></div>

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
                        <span> { selectedCoffee.price } TSH </span>
                    </div>
                </div>

                {/* Line */}
                <div style={{ height: '.05rem', backgroundColor: '#ced4da', marginTop: '1rem', marginBottom: '1rem' }}></div>

                <div className="row" style={{ fontFamily: 'Nunito', fontSize: '14px', marginTop: '1rem', marginBottom: '1rem' }}>
                    <div className="col-md-7"> To be Paid </div>
                    <div className="col-md-5" style={{ fontSize: '16px', textAlign: 'end', fontWeight: '700', color: '#db7f3b'  }}> 
                        <span> {selectedCoffee.price} TSH </span>
                    </div>
                </div>

            </div>
        )
    }

    return(
        toDone ? <Redirect to={`${url}/completed`} /> : 
        <div className="container-fluid" style={{ paddingTop: '3rem', paddingBottom: '5rem', backgroundColor: '#fff' }}>
            <div className="container" style={{ marginBottom: '50px' }}>
                <p className="title" style={{ marginBottom: '6rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', 
                    fontSize: '64px', textAlign: 'start', lineHeight: '3rem'}}> 
                    Checkout For Delivery!
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
                            Let us contact you!
                        </span>
                        <FormSection />
                    </div>  

                    <div className="col-md-1" style={{ backgroundColor: '' }}></div>
                    
                    <div className="col-md-5">
                        <OrderSummarySection />
                    </div>

                </div>
            </div>
        </div>
    )
}