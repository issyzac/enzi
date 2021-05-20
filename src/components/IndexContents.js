import { Component } from 'react'
import BannerComponent from './BannerComponent'
import BlendsComponent from './BlendsComponent'
import FooterComponent from './FooterComponent'
import GadgetComponent from './GadgetsComponent'
import SiteHeader from './HeaderComponent'
import InstagramFeedsComponent from './InstagramFeedsComponent'

class IndexContents extends Component {
    
    mainColor = '#202a44';
    accentColor = '#db7f3b';

    render(){
        return(
            <div>
                <SiteHeader />
                <div style={{ paddingTop: '80px', backgroundColor: "#ffffff" }}>
                    <div style={{ backgroundColor: "#f7f7f7" }}>
                        <BannerComponent />
                    </div>
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