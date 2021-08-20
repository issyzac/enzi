import firebase from '../../../Firestore.js'; 

const db = firebase.firestore()

export default function pushShoppedItem(user, coffeeOrder) {
    const userId = user.userReference
    const shopReference = user.shopReference
    const docRef = db.collection("users").doc(userId).collection("shop").doc(shopReference)
    docRef.update({coffeeOrder})
}