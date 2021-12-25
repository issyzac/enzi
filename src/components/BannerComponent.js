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
    paddingTop: '50px',
    paddingBottom: '120px',
    backgroundColor: '#f7f7f7'
}

const bannerTextStyle ={
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '50px',
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

        if (userReferenceCookie == undefined || userReferenceCookie == null){
            db.collection("users").add({}).then((ref) => {
                
                const docRef = db.collection("users").doc(ref.id).collection(path);
                const today = Date()
                docRef.add({"visit-date": today}).then((nref) => {

                    if (path == "shop"){
                        //If user is shopping the update the shop reference instead of subscription reference
                        user.shopReference = nref.id
                    }else {
                        user.subscriptionReference = nref.id
                    }

                    user.userReference = ref.id
                    updateUser(user)

                    // Persist the reference ID using cookie
                    Cookies.set(UserReferenceCookieTag, ref.id)
                    
                    setProceed(true);
                });
            });
        }else{

            const docRef = db.collection("users").doc(userReferenceCookie).collection(path);
            const today = Date()
            docRef.add({"visit-date": today}).then((nref) => {

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
        }
    }

    return(
        // If 1 Redirect to subscription page
        proceed ? <Redirect to={nextScreen} /> :
        <div id="#home" className="container" style={bannerStyle}>
            <div className="row">

                <div className="col-md-6 col-sm-12 d-md-none d-lg-none" style={{ marginBottom: "5rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>

                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center" style={{ marginTop: '5rem' }}>
                    <div className="">
                        <h4 style={bannerTextStyle}> Subscribe and relax, fresh coffee every week! </h4>
                    </div>
                    <div className="">
                        <p style={{ textAlign: 'start', fontSize: '24px', fontFamily: 'Poppins', fontWeight: '200', marginTop: '3rems' }}> 
                            Select your prefered coffee, tell us where to bring it and you never have to run out of coffee again! 
                        </p>
                    </div>

                    <div style={{ alignSelf: 'start' }}>
                        
                        <Button id="sign-up-botton" name={subscribeButton} variant='outline-light' style={signupButtonStyle} onClick={handleBannerAction} > Subscribe </Button>
                        
                        <Link >
                            <Button variant='outline-dark' name={buyBotton} style={enziButtonStyle} onClick={handleBannerAction} > Buy Coffee </Button>
                        </Link>
                    </div>
                    {/* <div style={{ textAlign: 'start' }}> 
                        <Flags.TZ title="Tanzania" style={flagsStyle}/>
                        <Flags.UG title="Uganda" style={flagsStyle}/>
                        <Flags.ET title="Ethiopia" style={flagsStyle}/>
                        <Flags.KE title="Kenya" style={flagsStyle}/>
                        <Flags.RW title="Rwanda" style={flagsStyle}/>
                    </div> */}
                </div>
                <div className="d-md-none col-sm-12" style={{ height: '7rem'}}></div>
                <div className="col-md-6 col-sm-12 d-md-block d-sm-none d-none" style={{ marginTop: "5rems" }}>
                    <Image src={blendMockupImage} fluid />
                </div>
            </div>
            <div className="row d-none" style={{ height: '120px' }}></div>
        </div>
    )
}

export default BannerComponent;