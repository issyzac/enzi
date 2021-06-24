import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent'
import SiteHeader from '../../components/HeaderComponent'
import { ShopProvider } from '../../contexts/ShopContext'
import OrderCompleteComponent from '../SharedComponents/OrderCompleteComponent'
import BuyCoffee from './BuyCoffee'
import BuyGadget from './BuyGadget'
import CheckoutShop from './Checkout'

function ShopIndex({url}){

    let match = useRouteMatch()

    return(
        <ShopProvider>
            <SiteHeader />
            <div style={{ paddingTop: '80px', backgroundColor: "#f5f5f5" }}>
                <Switch>
                    <Route exact path={`${match.path}/coffee`}>
                        <BuyCoffee url={match.path} />
                    </Route>
                    <Route exact path={`${match.path}/gadgets`}>
                        <BuyGadget url={match.path} />
                    </Route>
                    <Route exact path={`${match.path}/checkout`}>
                        <CheckoutShop url={match.path} />
                    </Route>
                    <Route exact path={`${match.path}/completed`}>
                        <OrderCompleteComponent message="Order Received!" />
                    </Route>
                </Switch>
            </div>
            <FooterComponent />
        </ShopProvider>
    )
}
export default ShopIndex