import React, { useContext, useState } from 'react'

const UserReferenceContext = React.createContext()
const UserReferenceUpdateContext = React.createContext()

const StartSubscriptionContext = React.createContext()
const StartSubscriptionUpdateContext = React.createContext()

const GadgetContext = React.createContext()
const GadgetUpdateContext = React.createContext()

const TextureContext = React.createContext()
const TextureUpdateContext = React.createContext()

const BlendContext = React.createContext()
const BlendUpdateContext = React.createContext()

const AmountContext = React.createContext()
const AmountUpdateContext = React.createContext()

/**
 * User Reference
 */
export function useUserReference() {
    return useContext(UserReferenceContext)
}
export function  useUserReferenceUpdate() {
    return useContext(UserReferenceUpdateContext)
}


/**
 * Start Subscription
 */
export function useStartSubscription(){
    return useContext(StartSubscriptionContext)
}
export function useStartSubscriptionUpdate() {
    return useContext(StartSubscriptionUpdateContext)
}


/**
 * Gadgets Stage
 */
export function useGadget() {
    return useContext(GadgetContext)
}
export function useGadgetUpdate(){
    return useContext(GadgetUpdateContext)
}

/**
 * Texture Stage
 */
export function useTexture(){
    return useContext(TextureContext)
}
export function useTextureUpdate() {
    return useContext(TextureUpdateContext)
}

/**
 * Blend Stage
 */
export function useBlend() {
    return useContext(BlendContext)
}
export function useBlendUpdate(){
    return useContext(BlendUpdateContext)
}

/**
 * Amount Stage
 */
export function useAmount() {
    return useContext(AmountContext)
}
export function useAmoutUpdate(){
    return useContext(AmountUpdateContext)
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

    function updateGadget(gadget){
        setGadget(gadget)
    }

    function updateTexture(texture) {
        setTexture(texture)
    }

    function updateBlend(blend) {
        setBlend(blend)
    }

    function updateAmount(amount) {
        setAmount(amount)
    }

    function WithGadgetContext({children}){
        return (
            <GadgetContext.Provider value={gadget}>
                <GadgetUpdateContext.Provider value={updateGadget}>
                    {children}
                </GadgetUpdateContext.Provider>
            </GadgetContext.Provider>
        )
    }

    function WithStartedSubscriptionContext({children}){
        return(
            <StartSubscriptionContext.Provider value={startedSubscription}>
                <StartSubscriptionUpdateContext.Provider value={setStarted}>
                    {children}
                </StartSubscriptionUpdateContext.Provider>
            </StartSubscriptionContext.Provider>
        )
    }

    function WithUserReferenceContext({children}){
        return(
            <UserReferenceContext.Provider value={userReferenceId}>
                <UserReferenceUpdateContext.Provider value={setReference}>
                    {children}
                </UserReferenceUpdateContext.Provider>
            </UserReferenceContext.Provider>
        )
    }

    function WithTextureContext({children}){
        return(
            <TextureContext.Provider value={texture}>
                <TextureUpdateContext.Provider value={updateTexture}>
                    {children}
                </TextureUpdateContext.Provider>
            </TextureContext.Provider>
        )
    }

    function WithBlendContext({children}){
        return(
            <BlendContext.Provider value={blend}>
                <BlendUpdateContext.Provider value={updateBlend}>
                    {children}
                </BlendUpdateContext.Provider>
            </BlendContext.Provider>
        )
    }

    function WithAmountContext({children}) {
        return(
            <AmountContext.Provider value={amount}>
                <AmountUpdateContext.Provider value={updateAmount}>
                    {children}
                </AmountUpdateContext.Provider>
            </AmountContext.Provider>
        )
    }

    return (
        <WithUserReferenceContext>
            <WithStartedSubscriptionContext>
                <WithGadgetContext>
                    <WithTextureContext>
                        <WithBlendContext>
                            <WithAmountContext>
                                {children}
                            </WithAmountContext>
                        </WithBlendContext> 
                    </WithTextureContext>
                </WithGadgetContext>
            </WithStartedSubscriptionContext>
        </WithUserReferenceContext>
    )

}
