import { Component } from 'react'
import BannerComponent from './BannerComponent'
import BlendsComponent from './BlendsComponent'
import FooterComponent from './FooterComponent'
import GadgetComponent from './GadgetsComponent'
import SiteHeader from './HeaderComponent'
import InstagramFeedsComponent from './InstagramFeedsComponent'

class IndexContents extends Component {
    
    render(){
        return(
            <div>
                <SiteHeader />
                <div style={{ paddingTop: '80px', backgroundColor: "#f7f7f7" }}>
                    <BannerComponent />
                    <BlendsComponent />
                    <GadgetComponent />
                    <InstagramFeedsComponent />
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

export default IndexContents;