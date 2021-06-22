import React from 'react'
import { Image } from 'react-bootstrap'

import blendMockupImage from '../../images/blends/blend-mokup-straight.jpeg'

function BuyCoffee(){

    function BlendSection(){
        return(
            <div className="container-fluid" style={{ paddingLeft: '0px' }}> 
            <h3 style={{ textAlign: 'start', fontFamily: 'Poppins', fontSize: '20px', fontWeight: '700' }}> Blend </h3>
                <div className="row">
                    <div className="col-md-6">
                    </div> 
                    <div className="col-md-6">
                    </div> 
                </div>
            </div>
        )
    }

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCoffee