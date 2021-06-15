import { Component } from 'react'

import { useRouteMatch, Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from '../../components/HeaderComponent'
import HeaderComponent from './components/Header'
import ChooseGadgetComponent from "./components/ChooseGadget";
import ChooseTexture from './components/ChooseTexture';
import ChooseBlend from './components/ChooseBlend';
import ChooseAmount from './components/ChooseAmount';
import ContactInfo from './components/ContactInfo';

export default function SubscriptionPage(){

    let match = useRouteMatch();

    return(
        <div>
            <SiteHeader />
            <div style={{ paddingTop: '80px', backgroundColor: "#ffffff" }}>
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <HeaderComponent />
                    </Route>
                    <Route path={`${match.path}/gadgets`}>
                        <ChooseGadgetComponent url={match.path} />
                    </Route>
                    <Route path={`${match.path}/texture`}>
                        <ChooseTexture url={match.path} />
                    </Route>
                    <Route path={`${match.path}/blend`}>
                        <ChooseBlend url={match.path} />
                    </Route>
                    <Route path={`${match.path}/amount`}>
                        <ChooseAmount url={match.path} />
                    </Route>
                    <Route path={`${match.path}/contact`}>
                        <ContactInfo url={match.path} />
                    </Route>
                </Switch>
            </div>
        </div>    
    )
}