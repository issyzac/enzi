import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Image from 'react-bootstrap/Image'
import mokart from '../images/banner/mokart.png'
import Flags from 'country-flag-icons/react/3x2'
import blendMockupImage from '../images/blends/blend-mokup-slant.jpeg'
import "./styles/EnziButton.css"

import firebase from '../Firestore.js';

import Cookies from 'js-cookie';

import { UserReferenceCookieTag } from '../utils/constants.js';

import { useUser, useSubscription, useUserUpdate } from '../contexts/SubscriptionContext';

const bannerStyle = {
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: '#f7f7f7'
}

const bannerTextStyle ={
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '84px',
    color: '#202a44',
    textAlign: 'start'
}

const flagsStyle = {
    height: '32px',
    width: '32px',
    marginRight: '20px'
}

const enziButtonStyle = {
    border: '2px solid #202a44',
    color: '#202a44',
    // alignSelf: 'center',
    marginBottom: '1rem',
    marginRight: '1rem',
    fontVariant: 'all-small-caps',
    width: '10rem',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '5px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  }

const signupButtonStyle = {
border: '2px solid #db7f3b',
borderRadius: '5px',
color: '#202a44',
backgroundColor: '#db7f3b',
// alignSelf: 'center',
marginBottom: '1rem',
marginRight: '1rem',
fontVariant: 'all-small-caps',
width: '10rem',
fontFamily: 'Nunito',
fontWeight: '700',
fontSize: '1.2rem',
paddingLeft: '2rem',
paddingRight: '2rem',
paddingTop: '0.5rem',
paddingBottom: '0.5rem'
}

function BannerComponent(){

    const db = firebase.firestore();

    const user = useUser()
    const updateUser = useUserUpdate()
    const subscription = useSubscription()

    const subscribeButton = "subscribe"
    const buyBotton = "buy"

    const userReference = user.userReference

    const userReferenceCookie = Cookies.get(UserReferenceCookieTag)

    const [proceed, setProceed] = useState(false);
    const [nextScreen, setNextScreen] = useState("")

    const handleBannerAction = (e) => {

        let buttonClicked = e.target.name

        switch(buttonClicked){
            case subscribeButton:
                setNextScreen("subscribe")
                break
            case buyBotton:
                setNextScreen("/shop/coffee")
                break
        }

        let path = buttonClicked == "buy" ? "shop" : "subscription"

        const today = Date()

        if (userReferenceCookie == undefined || userReferenceCookie == null){
            db.collection("users").add({"last-visit-date" : today}).then((ref) => {
                
                
                const docRef = db.collection("users").doc(ref.id).collection(path);
                docRef.add({"date": today}).then((nref) => {

                    if (path == "shop"){
                        //If user is shopping the update the shop reference instead of subscription reference
                        user.shopReference = nref.id
                    }else {
                        user.subscriptionReference = nref.id
                    }

                    console.log("Shujaa"+ docRef)

                    user.userReference = ref.id
                    updateUser(user)

                    // Persist the reference ID using cookie
                    Cookies.set(UserReferenceCookieTag, ref.id)
                    
                    setProceed(true);
                });
            });
        }else{
            const today = Date()
            const docRef = db.collection("users").doc(userReferenceCookie).set({"last-visit-date": today}).then((afterdateReference) => {
                
                console.log("Shujaa"+ afterdateReference)

                const _ref = db.collection("users").doc(userReferenceCookie).collection(path);
                _ref.add({"date": today}).then((nref) => {

                    if (path == "shop"){
                        //If user is shopping the update the shop reference instead of subscription reference
                        user.shopReference = nref.id
                    }else {
                        user.subscriptionReference = nref.id
                    }
                    user.userReference = userReferenceCookie
                    updateUser(user)

                    setProceed(true);
                });  
            })
        }
    }

    return(
        // If 1 Redirect to subscription page
        proceed ? <Redirect to={nextScreen} /> :
        <div id="#home" className="container" style={bannerStyle}>
            <div className="row" style={{ alignItems: 'center' }}>

                <div className="col-md-4 col-sm-12 d-md-none d-lg-none" style={{ marginBottom: "3rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>

                <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center">
                    <div className="">
                        <h4 style={bannerTextStyle}> <b style={{ color: '#db7f3b', fontSize: '1em' }}>enzi</b> Premium Specialty Coffee </h4>
                    </div>
                    <div className="">
                        <p style={{ textAlign: 'start', fontSize: '24px', fontFamily: 'Poppins', fontWeight: '300', marginTop: '4rems' }}> 
                            Roasted at the origin, Delivered World Wide! 
                        </p>
                    </div>

                    <div style={{ alignSelf: 'start', marginTop: '2rem' }}>
                        
                        <Button id="sign-up-botton" name={subscribeButton} variant='outline-light' style={signupButtonStyle} onClick={handleBannerAction} > Subscribe </Button>
                        
                        <Link >
                            <Button variant='outline-dark' name={buyBotton} style={enziButtonStyle} onClick={handleBannerAction} > Buy Coffee </Button>
                        </Link>
                    </div>
                </div>
                <div className="d-md-none col-sm-12" style={{ height: '7rem'}}></div>
                <div className="col-md-7 col-sm-12 d-md-block d-sm-none d-none">
                    <div className='row align-items-center'>
                        <div className=''>
                            <Image className='' src={blendMockupImage} style={{ backgroundColor: '#ff55ff' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-none" style={{ height: '120px' }}></div>
        </div>
    )
}

export default BannerComponent;