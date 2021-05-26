import { Component } from 'react'
import { useRouteMatch, Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from '../../components/HeaderComponent'
import HeaderComponent from './components/Header'
import ChooseGadgetComponent from "./components/ChooseGadget";
import ChooseTexture from './components/ChooseTexture';
import ChooseBlend from './components/ChooseBlend';
import ChooseAmount from './components/ChooseAmount';

function SubscriptionPage(){

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
                            <ChooseTexture />
                        </Route>
                        <Route path={`${match.path}/gadgets`}>
                            <ChooseBlend />
                        </Route>
                        <Route path={`${match.path}/gadgets`}>
                            <ChooseAmount />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
}


export default SubscriptionPage;