import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';

import blendMockupImage from '../../../images/blends/blend-mokup-straight.jpeg'
import blendMockupImageSlant from '../../../images/blends/blend-mokup-slant.jpeg'

import '../styles/SubStyle.css';
import { useSubscription, useSubscriptionUpdate } from "../../../contexts/SubscriptionContext";

function ChooseBlend({url}){

    const subscription = useSubscription()
    const updateSubscription = useSubscriptionUpdate()

    const [ toAmount, setToAmount ] = useState(false)

    console.log("USEREF: ", subscription);

    const captureBlend = (blend) => {

        //Update app state with the selected blend
        subscription.blend = blend
        updateSubscription(subscription)

        //Proceed to the next screen
        setToAmount(true)

    }

    function BlendItem({name, image, url}){

        function blendSelected(){
            captureBlend(name)
        }

        return(
            <div className="col-md-6 col-sm-12"> 
                <Link to={`${url}/amount`} id="enzi-link" onClick={blendSelected}>
                    <div className='sub-select-blend-btn' >
                        <div className="row">
                            <div className="col-md-6">
                                <Image src={image} fluid />
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'center', height: '100%', marginTop: '3rem', marginBottom: '3rem' }}>
                                <span className="sub-select-blend-btn-text"> {name} </span>
                            </div>
                        </div>    
                    </div> 
                </Link>
            </div>
        )
    }

    return(
        toAmount ? <Redirect to={`${url}/amount`} />
        :
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}> 
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '3rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        Pick a blend
                    </p>
                    <div className="row">
                        <BlendItem name="Enzi" image={blendMockupImage} url={url} />
                        <BlendItem name="Enzi Lite" image={blendMockupImageSlant} url={url} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseBlend;