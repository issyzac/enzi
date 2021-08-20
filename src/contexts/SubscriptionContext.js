import React, { useContext, useState } from 'react'

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

const SubscriptionFlowContext = React.createContext()
const SubscriptionFlowUpdateContext = React.createContext()

/**
 * Expose: User Hook
 */
export function useUser(){
    return useContext(UserContext)
}
export function useUserUpdate() {
    return useContext(UserUpdateContext)
}


/**
 * Expose: Subscription Flow Hook
 */
export function useSubscription() {
    return useContext(SubscriptionFlowContext)
}
export function useSubscriptionUpdate(){
    return useContext(SubscriptionFlowUpdateContext)
}

export function SubscriptionProvider({ children }) {
 
    const usr = {
        userReference: '',
        shopReference: '',
        subscriptionReference: '',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: ''
    };

    const sub = {
        startedSubscription: false,
        gadget: '',
        texture: '',
        blend: '',
        amount: ''
    }

    const [ user, setUser] = useState(usr)
    const [ subscription, setSubscription ] = useState(sub)

    function updateUser(user) {
        setUser(user)
    }

    function updateSubscription(subscription){
        setSubscription(subscription)
    }

    
    function WithUserContext({children}){
        return (
            <UserContext.Provider value={user}>
                <UserUpdateContext.Provider value={updateUser}>
                    {children}
                </UserUpdateContext.Provider>
            </UserContext.Provider>
        )
    }

    function WithSubscriptionContext({children}){
        return (
            <SubscriptionFlowContext.Provider value={subscription}>
                <SubscriptionFlowUpdateContext.Provider value={updateSubscription}>
                    {children}
                </SubscriptionFlowUpdateContext.Provider>
            </SubscriptionFlowContext.Provider>
        )
    }

    return (
        <WithUserContext>
            <WithSubscriptionContext>
                {children}
            </WithSubscriptionContext>
        </WithUserContext>
    )
}
