import { Component } from 'react'
import BannerComponent from './BannerComponent'
import BlendsComponent from './BlendsComponent'
import FooterComponent from './FooterComponent'
import GadgetComponent from './GadgetsComponent'
import SiteHeader from './HeaderComponent'

class IndexContents extends Component {
    
    render(){
        return(
            <div>
                <SiteHeader />
                <div style={{ paddingTop: '80px' }}>
                    <BannerComponent />
                    <BlendsComponent />
                    <GadgetComponent />
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

export default IndexContents;