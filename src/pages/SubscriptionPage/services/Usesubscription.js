import React from 'react'

import firebase from '../../../Firestore.js'; 

const db = firebase.firestore()

function pushToNode(user, subscription){
    const userId = user.userReference;
    const docRef = db.collection("users").doc(userId);
    docRef.update({user, subscription});
}

export default pushToNode