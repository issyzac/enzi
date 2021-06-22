import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import blendMockupImage from '../../images/blends/blend-mokup-straight.jpeg'

const blendStyle = {
    border: "1px solid lightgrey",
    marginLeft: '1px',
    marginRight: '1px',
    height: '130px',
    borderRadius: '10px'
}

const enziButtonStyle = {
    // border: '0.2px solid #202a44',
    border: '0.2px solid lightgrey',
    color: '#202a44',
    fontVariant: 'all-small-caps',
    width: '100%',
    height: '100%',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '5px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  }

  const enziButtonStyleSelected = {
      ...enziButtonStyle,
      border: "1px solid 202a44"
  }

function BuyCoffee(){

    const [blendSelection, setBlendSelection] = useState(0)
    const [amount, setAmount] = useState(1)

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
            }

            return(
                <div className="col-md-6" style={{ padding: '0px' }}>
                    <Button onClick={handleBlendSelection} variant='outline-dark' style={ blendSelection == blendCode ? enziButtonStyleSelected : enziButtonStyle }>
                        {name}
                    </Button>
                </div>
            )
        }

        return(
            <div className="container-fluid" style={{ paddingLeft: '0px', marginTop: '2rem' }}> 
            <h3 style={{ textAlign: 'start', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '200' }}> Blend </h3>
                <div className="row" style={blendStyle}>
                    <BlendItem blendCode={0} name="Enzi" />
                    <BlendItem blendCode={1} name="Enzi Lite" />
                </div>
            </div>
        )
    }

    function QuantitySelection(){
        return(
            <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '2rem' }}> 
            <h3 style={{ textAlign: 'start', fontFamily: 'Poppins', fontSize: '16px', fontWeight: '200' }}> Quantity </h3>
                <div className="row" style={blendStyle}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <Button variant='outline-dark' style={enziButtonStyle}>
                            1 Bag
                        </Button>
                    </div> 
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <Button variant='outline-dark' style={enziButtonStyle}>
                            3 Bags
                        </Button>
                    </div> 
                </div>
            </div>
        )
    }

    function CheckoutButton(){
        return(
            <Link  to="/gadgetsware" style={{ textDecoration: 'none', width: '250px', marginTop: '2rem'}}>
                <div id="shop-gadget-button" className="shop-gadget-button"> Checkout </div>
            </Link>
        )
    }

    return (
        <div className="container-fluid" style={{ backgroundColor: '#f5f5f5f5', paddingTop: '1rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7" style={{ height: '500px'}}>
                        <Image src={blendMockupImage} fluid />
                    </div>
                    <div className="col-md-5">
                        <HeaderSection />
                        <BlendSection />
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