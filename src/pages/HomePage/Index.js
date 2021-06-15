import React from 'react'
import IndexContents from '../../components/IndexContents'
import { useUser } from '../../contexts/SubscriptionContext';

function Index(){

    const user = useUser()
    console.log("USEREF : User reference at Index, value : "+user.userReference)

    return(
        <IndexContents />
    )
}

export default Index;