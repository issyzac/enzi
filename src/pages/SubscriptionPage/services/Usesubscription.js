import React from 'react'

import firebase from '../../../Firestore.js'; 

const db = firebase.firestore()

export default function pushToNode(user, subscription){
    const userId = user.userReference
    const subscriptionReference = user.subscriptionReference
    const docRef = db.collection("users").doc(userId).collection("subscription").doc(subscriptionReference)
    
    // Push subscription node only
    pushSubscription(docRef, subscription)
}

function pushSubscription(ref, subscription){
    ref.update({subscription})
}

export function pushUserInformation(user){
    const userId = user.userReference
    const documentReference = db.collection("users").doc(userId);
    documentReference.update({user})
}