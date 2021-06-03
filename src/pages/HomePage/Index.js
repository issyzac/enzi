import React from 'react'
import IndexContents from '../../components/IndexContents'
import { useUserReference } from '../../contexts/SubscriptionContext';

function Index(){

    const uur = useUserReference()
    console.log("USEREF : User reference at Index, value : "+uur)

    return(
        <IndexContents />
    )
}

export default Index;