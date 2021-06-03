import React, { useContext, useState } from 'react'

const UserReferenceContext = React.createContext()
const UserReferenceUpdateContext = React.createContext()

const StartSubscriptionContext = React.createContext()
const GadgetContext = React.createContext()
const TextureContext = React.createContext()
const BlendContext = React.createContext()
const AmountContext = React.createContext()

export function useUserReference() {
    return useContext(UserReferenceContext)
}

export function  useUserReferenceUpdate() {
    return useContext(UserReferenceUpdateContext)
}

export function useStartSubscription(){
    return useContext(StartSubscriptionContext)
}

export function useGadget() {
    return useContext(GadgetContext)
}

export function useTexture(){
    return useContext(TextureContext)
}

export function useBlend() {
    return useContext(BlendContext)
}

export function useAmount() {
    return useContext(AmountContext)
}

export function SubscriptionProvider({ children }) {
 
    const [ userReferenceId, setReferenceId ] = useState()
    const [ startedSubscription, setStartedSubscription ] = useState(false)
    const [ gadget, setGadget ] = useState()
    const [ texture, setTexture ] = useState()
    const [ blend, setBlend ] = useState()
    const [ amount, setAmount ] = useState()

    const [ shippingEmail, setShippingEmail ] = useState()

    function setReference(ref){
        console.log("USEREF: Updated reference in context, value : "+ref);
        setReferenceId(ref)
    }

    function setStarted(started){
        setStartedSubscription(started)
    }

    function setSelectedGadget(gadget){
        setGadget(gadget)
    }

    function setSelectedTexture(texture) {
        setTexture(texture)
    }

    function setSelectedBlend(blend) {
        setBlend(blend)
    }

    function setSelectedAmount(am) {
        setAmount(am)
    }

    return (
        <UserReferenceContext.Provider value={userReferenceId}>
            <UserReferenceUpdateContext.Provider value={setReference}>
                <StartSubscriptionContext.Provider value={startedSubscription}>
                    <GadgetContext.Provider value={gadget}>
                        <TextureContext.Provider value={texture}>
                            <BlendContext.Provider value={blend}>
                                <AmountContext.Provider value={amount}>
                                    {children}
                                </AmountContext.Provider>
                            </BlendContext.Provider>
                        </TextureContext.Provider>
                    </GadgetContext.Provider>
                </StartSubscriptionContext.Provider>                
            </UserReferenceUpdateContext.Provider>
        </UserReferenceContext.Provider>
    )

}

