import { Component, useState } from 'react';
import { Button } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import { useSubscription, useSubscriptionUpdate } from '../../../contexts/SubscriptionContext';

import '../styles/SubStyle.css';

function ChooseAmount ({url}) {

    const subscription = useSubscription()
    const updateSubscription = useSubscriptionUpdate()

    const [toSummary, setToSummary] = useState(false)

    console.log("USEREF : ", subscription);

    const captureAmount = (amount) => {

        //Update app state with selected amount 
        subscription.amount = amount
        updateSubscription(subscription)

        //proceed to summary screen
        setToSummary(true)

    }

    function  AmountItem({amount, url}) {

        function amountSelected(){
            captureAmount(amount)
        }

        return (
            <div className="col-md-6 col-sm-12"> 
                <Link to={`${url}/contact`} id="enzi-link" onClick={amountSelected}>
                    <div className="sub-select-btn" style={{ paddingTop: '2rem', paddingBottom: '3rem' }} > 
                        {amount}
                    </div> 
                </Link>
            </div>
        )
    }

    return(

        toSummary ? <Redirect to={`${url}/contact`} /> 
        :
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '3rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        How many bags per delivery? </p>
                        <div className="row">
                            <AmountItem amount="2 Bags (1 Kg)" url={url} />
                            <AmountItem amount="4 Bags (2 Kg)" url={url} />
                            <AmountItem amount="6 Bags (3 Kg)" url={url} />
                            <AmountItem amount="Other" url={url} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseAmount;