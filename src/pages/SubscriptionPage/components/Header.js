import { Button } from "react-bootstrap";
import { Link, Redirect, useRouteMatch } from 'react-router-dom';
import '../../../components/styles/enziStyles.css';

import '../../../services/FirebaseService.js';
import firebase from '../../../Firestore.js'; 

import Cookies from 'js-cookie';

import React, { useState } from 'react';
import { useUser, useUserUpdate, useSubscription, useSubscriptionUpdate } from "../../../contexts/SubscriptionContext";

import SubscriptionKeys from '../../../utils/constants'
import pushToNode from "../services/Usesubscription";


const enziButtonStyle = {
    border: '1px solid #202a44',
    color: '#202a44',
    alignSelf: 'start',
    marginBottom: '1rem',
    marginRight: '1rem',
    fontVariant: 'all-small-caps',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '2px',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }

const urCookie = Cookies.get('user-reference-cookie')

function HeaderComponent(){

    const user = useUser()
    const subscription = useSubscription()
    const updateSubscription = useSubscriptionUpdate()

    const [proceedToGadgets, setProceedToGadgets] = useState(false)

    let match = useRouteMatch()

    const getStartedWithSubscription = () => {
        //Update subscription flow state
        subscription.startedSubscription = true
        updateSubscription(subscription)

        pushToNode(user, subscription)

        setProceedToGadgets(true);
    }

    return(
        proceedToGadgets ? <Redirect to={`${match.url}/gadgets`} /> : 
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '50px', textAlign: 'start', lineHeight: '5rem'}}> Customise your <br />Subscription! </p>
                    <p className="subtitle" style={{ fontFamily: 'Spartan', fontWeight: '300', marginTop: '5rem', fontSize: '40px', textAlign: 'start', lineHeight: '3rem' }}> 
                        Your favorite coffee exactly how you want it, every first week of the month! </p>
                    <div style={{ marginTop: '5rem', textAlign: 'start' }}>
                        <Button onClick={getStartedWithSubscription} variant='outline-dark' style={enziButtonStyle} > Get Started </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;