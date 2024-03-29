import React, { useState, useEffect } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { enziButtonStyle } from '../../utils/CustomStyles'
import { useSelectedCoffee, useUpdateCoffeeSelected, useDeliveryInformation } from '../../contexts/ShopContext'
import { useUser } from '../../contexts/SubscriptionContext'
import pushShoppedItem from './services/ShopService'

import enziBlendMockup from '../../images/blends/blend-mokup-straight.jpeg'
import enziLiteBlendMockup from '../../images/blends/blend-mokup-slant.jpeg'

const blendStyle = {
    border: "1px solid lightgrey",
    marginLeft: '1px',
    marginRight: '1px',
    height: '130px',
    borderRadius: '10px'
}

const quantityStyle = {
    ...blendStyle,
    height: '70px',
}

const enziButtonStyleSelected = {
    ...enziButtonStyle,
    border: "3px solid 202a44"
}

const enziBlendDescription = "Classic blend will give you a fruity balanced calm flavor to enjoy your cup of coffee anytime of the day"

const enziLiteBlendDescription = "A darker blend rich in flavor thats not afraid to give you the kick you need to start your day"

function BuyCoffee({url}){

    const [blendSelection, setBlendSelection] = useState(0)
    const [grindSelection, setGrindSelection] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [toCheckout, setToCheckout] = useState(false)

    const coffeeSelected = useSelectedCoffee()
    const updateSelectedCoffee = useUpdateCoffeeSelected()
    const user = useUser()
    const deliveryInformation = useDeliveryInformation()

    const saveSelectedCoffee = ({mGrind, mQuantity}) => {

        console.log("bucks", "saving selected coffee ")

        let grind = mGrind == 0 ? "Whole" : "Ground"
        coffeeSelected.grind = grind
        coffeeSelected.quantity = quantity
        coffeeSelected.price = (quantity*10000)

        //Combine selected coffee and deliver information into a single object
        let coffeeOrder = {
            coffeeSelected, 
            deliveryInformation,
            orderDate: new Date()
        }

        console.log("teamo", user)

        //Update the state of selected Coffee
        pushShoppedItem(user, coffeeOrder)

        setToCheckout(true)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    function HeaderSection(){
        return(
            <>
                <h2 style={{ fontFamily: 'Poppins', fontWeight: '900', marginTop: '3rem', fontSize: '3rem', textAlign: 'start' }}>
                    Freshly Roasted Coffee
                </h2>
                <h4 style={{ textAlign: 'start', fontSize: '1rem', fontFamily: 'Inter', 
                    marginTop: '1rem', marginBottom: '1rem', fontWeight: '700', }}>
                    <b> 10,000/= <span style={{ marginLeft: '10px', marginRight: '10px', color: '#202a44' }}> | </span> 250grams</b>
                </h4>
                
            </>
        )
    }

    function BlendSection(){

        function BlendItem({ blendCode, name }){

            function handleBlendSelection(e){

                setBlendSelection(blendCode)

                coffeeSelected.blend = blendCode === 0 ? "Classic" : "Dark"
                updateSelectedCoffee(coffeeSelected)
            }

            return(
                <div className="col-md-6" style={{ padding: '0px' }}>
                    <Button onClick={handleBlendSelection} variant='outline-dark' style={ blendSelection == blendCode ? enziButtonStyleSelected : enziButtonStyle }>
                        <span style={{ fontFamily: 'Poppins', fontSize: '25px' }}>
                            {name}
                        </span>
                    </Button>
                </div>
            )
        }

        return(
            <div className="container-fluid" style={{ paddingLeft: '0px', marginTop: '1rem' }}> 
            <h3 style={{ textAlign: 'start', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '200' }}> Blend </h3>
                <div className="row" style={blendStyle}>
                    <BlendItem blendCode={0} name="Classic" />
                    <BlendItem blendCode={1} name="Dark" />
                </div>
            </div>
        )
    }

    function BlendDescription(){
        return(
            <div style={{ marginTop: '1rem' }}>
                <p style={{ textAlign: 'start', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>
                    { blendSelection === 0 ? enziBlendDescription : enziLiteBlendDescription }
                </p>
            </div>
        )
    }

    function GrindSelection(){

        function GrindItem({ grindCode, name }){

            function handleGrindSelection(e){
                coffeeSelected.grind = grindCode == 0 ? "Whole" : "Ground"
                updateSelectedCoffee(coffeeSelected)
                
                setGrindSelection(grindCode)
            }

            return(
                <div className="col-md-6" style={{ padding: '0px' }}>
                    <Button onClick={handleGrindSelection} variant='outline-dark' style={ grindSelection == grindCode ? enziButtonStyleSelected : enziButtonStyle }>
                        <span style={{ fontFamily: 'Poppins', fontSize: '25px' }}>
                            {name}
                        </span>
                    </Button>
                </div>
            )
        }

        return(
            <div className="container-fluid" style={{ paddingLeft: '0px', marginTop: '2rem' }}> 
            <h3 style={{ textAlign: 'start', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '200' }}> Grind </h3>
                <div className="row" style={blendStyle}>
                    <GrindItem grindCode={0} name="Whole Beans" />
                    <GrindItem grindCode={1} name="Ground" />
                </div>
            </div>
        )
    }

    function QuantitySelection(){

        function reduceQuantity() {
            if (quantity > 1) {
                let q = quantity-1
                setQuantity(q)
                coffeeSelected.quantity = q
            }
        }

        function increaseQuantity(){
            let q = quantity+1
            coffeeSelected.quantity = q
            setQuantity(q)
        }

        return(
            <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '2rem' }}> 
            <h3 style={{ textAlign: 'start', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '200' }}> Quantity </h3>
                <div className="row" style={quantityStyle}>
                    <div className="col-md-4" style={{ padding: '0px' }}>
                        <Button variant='outline-dark' onClick={reduceQuantity} style={enziButtonStyle}>
                            -
                        </Button>
                    </div>
                    <div className="col-md-4">
                        <div style={{ verticalAlign: 'middle', textAlign: 'center', lineHeight: '70px', fontFamily: 'Poppins', fontWeight: '500' }}>
                            { quantity == 1 ? quantity+" Bag" : quantity+" Bags"}
                        </div>
                    </div> 
                    <div className="col-md-4" style={{ padding: '0px' }}>
                        <Button variant='outline-dark' onClick={increaseQuantity} style={enziButtonStyle}>
                            +
                        </Button>
                    </div> 
                </div>
            </div>
        )
    }

    function CheckoutButton(){

        function handleCheckout(e){
            e.preventDefault()
            saveSelectedCoffee(grindSelection, quantity)
        }

        return(
            <Link onClick={handleCheckout} style={{ textDecoration: 'none', width: '250px', marginTop: '2rem'}}>
                <div id="shop-gadget-button" className="shop-gadget-button"> Checkout </div>
            </Link>
        )
    }

    return (
        toCheckout ? <Redirect to={`${url}/checkout`} /> 
        :  
        <div className="container-fluid" style={{ backgroundColor: '#f5f5f5f5', paddingTop: '1rem', paddingBottom: '5rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7" style={{ height: '500px'}}>
                        <Image src={ blendSelection === 0 ? enziBlendMockup : enziLiteBlendMockup } fluid />
                    </div>
                    <div className="col-md-5">
                        <HeaderSection />
                        <div style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1rem', backgroundColor: 'rgb(232 232 232)', borderRadius: '5px' }}>
                            <BlendSection />
                            <BlendDescription />
                        </div>
                        <GrindSelection />
                        <QuantitySelection />
                        <div style={{ height: '50px' }}></div>
                        <CheckoutButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCoffee