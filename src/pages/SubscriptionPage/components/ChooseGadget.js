import { Button, Image } from "react-bootstrap";
import React, { useState } from 'react'

import { Link, Redirect, useRouteMatch } from 'react-router-dom'

import '../styles/SubStyle.css';

import aeropress from '../res/gadgets/aeropress.svg';
import frenchpress from '../res/gadgets/french-press.svg';
import electricDrip from '../res/gadgets/coffee-maker.svg';
import mokaPot from '../res/gadgets/moka-pot.svg';
import v60 from '../res/gadgets/pour-over.svg';
import chemex from '../res/gadgets/chemex.svg';
import esspressoMachine from '../res/gadgets/espresso-machine.svg';
import { useUser, useUserUpdate, useSubscription, useSubscriptionUpdate } from "../../../contexts/SubscriptionContext";

import firebase from '../../../Firestore.js'; 

function ChooseGadgetComponent({url}){

    let match = useRouteMatch();

    const user  = useUser()
    const updateUser = useUserUpdate()

    const subscription = useSubscription()
    const updateSubscription = useSubscriptionUpdate()

    const [proceedToTexture, setProceedToTexture] = useState(false)

    const db = firebase.firestore()

    const captureGadget = (name) => {
        if (user.userReference != null && user.userReference != undefined) {
            const userId = user.userReference;
            const docRef = db.collection("users").doc(userId);
            docRef.update({ "gadget" : name});
            
            subscription.gadget = name
            updateSubscription(subscription)

            setProceedToTexture(true)
        }
    }

    function GadgetItem({name, icon, url}){

        function gadgetClicked(e){
            console.log("USEREF: ", name);
            captureGadget(name)
        }

        return(
            <div className="col-md-6 col-sm-12"> 
                <Link id="enzi-link" onClick={gadgetClicked}>
                    <div className="sub-select-btn" style={{ paddingTop: '2rem', paddingBottom: '2rem' }} > 
                        <div className="row" style={{  display: 'flex', alignContent: 'center', justifyItems: 'center', height: '5rem' }}>
                            <div className="col-md-3">
                                <Image src={icon} fluid/>
                            </div>
                            <div className="col-md-9" style={{ display: 'flex', alignItems: 'center'}}>
                                <span className="sub-select-btn-text"> {name} </span>
                            </div>
                        </div>    
                    </div> 
                </Link>
            </div>
        )
    }

    return(
        proceedToTexture ? <Redirect to={`${url}/texture`} /> :
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '3rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        How do you usually make your coffee? </p>
                        <div className="row">  
                            <GadgetItem name="Aeropress" icon={aeropress} url={url} />
                            <GadgetItem name="Frenchpress/Plunger" icon={frenchpress} url={url} />
                            <GadgetItem name="Moka Pot" icon={mokaPot} url={url} />
                            <GadgetItem name="Electric Drip Machine" icon={electricDrip} url={url} />
                            <GadgetItem name="Chemex" icon={chemex} url={url} />
                            <GadgetItem name="V60" icon={v60} url={url} />
                            <GadgetItem name="Esspresso Machine" icon={esspressoMachine} url={url} />
                            <GadgetItem name="I Simply Boil!" icon="" url={url} />
                        </div>

                        <div className="row" style={{ marginTop: '3rem' }}>
                            <div className="col-md-12">
                                <p className="subtitle" style={{ fontFamily: 'Spartan', fontWeight: '300', marginTop: '5rem', fontSize: '40px', textAlign: 'start', lineHeight: '3rem' }}> 
                                    Dont have any gadget? Check out our gadget store for some great deals on coffeewares!
                                </p>
                                <div className="row">
                                    <div className="col-md-3">
                                    <div style={{ marginTop: '1rem', textAlign: 'start' }}>
                                        <Link  to="/gadgetsware" style={{ textDecoration: 'none', width: '250px' }}>
                                            <div id="shop-gadget-button" className="shop-gadget-button"> Shop Gadgets </div>
                                        </Link>
                                    </div>
                                    </div>
                                    <div className="col-md"></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGadgetComponent;