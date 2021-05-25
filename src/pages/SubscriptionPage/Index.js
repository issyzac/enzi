import { Component } from 'react'
import SiteHeader from '../../components/HeaderComponent'
import HeaderComponent from './components/Header'
import ChooseGadgetComponent from "./components/ChooseGadget";
import ChooseTexture from './components/ChooseTexture';
import ChooseBlend from './components/ChooseBlend';
import ChooseAmount from './components/ChooseAmount';

class SubscriptionPage extends Component {
    render(){
        return(
            <div>
                <SiteHeader />
                <div style={{ paddingTop: '80px', backgroundColor: "#ffffff" }}>
                    <HeaderComponent />
                    <ChooseGadgetComponent />
                    <ChooseTexture />
                    <ChooseBlend />
                    <ChooseAmount />
                </div>
            </div>
        )
    }
}

export default SubscriptionPage;