import React, { useContext, useState } from 'react'

// Selected coffee details context
const CoffeeSelectedCtx = React.createContext()
const UpdateCoffeeSelectedCtx = React.createContext()

// Delivery Infornation context
const DeliveryInformationCtx = React.createContext()
const UpdateDeliveryInformationCtx = React.createContext()

/**
 * Expose Provider hooks
 */

//Selected Coffee Hook
export function useSelectedCoffee(){
    return useContext(CoffeeSelectedCtx)
}
export function useUpdateCoffeeSelected(){
    return useContext(UpdateCoffeeSelectedCtx)
}

// Delivery Information Hook
export function useDeliveryInformation(){
    return useContext(DeliveryInformationCtx)
}
export function useUpdateDeliveryInformation(){
    return useContext(UpdateDeliveryInformationCtx)
}

export function ShopProvider({children}){
    
    const coffee = {
        blend: '',
        grind: '',
        quantity: 1
    }

    const deliveryInformation = {
        userReference: '',
        email: '',
        phone: '',
        fullName: '',
        address: '',
        city: ''
    }

    const [coffeeSelected, setCoffeeSelected] = useState(coffee)
    const [deliveryInfo, setDeliveryInfo] = useState(deliveryInformation)

    function updateCoffeeSelected(coffee){
        setCoffeeSelected(coffee)
    }

    function updateDeliveryInformation(di){
        setDeliveryInfo(di)
    }

    function WithSelectedCoffeeContext({children}){
        return(
            <CoffeeSelectedCtx.Provider value={coffeeSelected}>
                <UpdateCoffeeSelectedCtx.Provider value={updateCoffeeSelected}>
                    {children}
                </UpdateCoffeeSelectedCtx.Provider>
            </CoffeeSelectedCtx.Provider>
        )
    }
    
    function WithDeliveryInformationContext({children}){
        return(
            <DeliveryInformationCtx.Provider value={deliveryInfo}>
                <UpdateDeliveryInformationCtx.Provider value={updateDeliveryInformation}>
                    {children}
                </UpdateDeliveryInformationCtx.Provider>
            </DeliveryInformationCtx.Provider>
        )
    }

    return(
        <WithSelectedCoffeeContext>
            <WithDeliveryInformationContext>
                {children}
            </WithDeliveryInformationContext>
        </WithSelectedCoffeeContext>
    )

}