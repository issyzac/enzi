import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent'
import SiteHeader from '../../components/HeaderComponent'
import BuyCoffee from './BuyCoffee'
import BuyGadget from './BuyGadget'

function ShopIndex({url}){

    let match = useRouteMatch()

    return(
        <div>
            <SiteHeader />
            <div style={{ paddingTop: '80px', backgroundColor: "#f5f5f5", height: '90vh' }}>
                <Switch>
                    <Route exact path={`${match.path}/coffee`}>
                        <BuyCoffee url={match.path} />
                    </Route>
                    <Route exact path={`${match.path}/gadgets`}>
                        <BuyGadget url={match.path} />
                    </Route>
                </Switch>
            </div>
            <FooterComponent />
        </div>
    )
}
export default ShopIndex