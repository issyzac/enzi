import { Component } from 'react'
import BannerComponent from './BannerComponent'
import BlendsComponent from './BlendsComponent'
import Footer from './Footer'
import GadgetComponent from './GadgetsComponent'
import SiteHeader from './HeaderComponent'

class IndexContents extends Component {
    render(){
        return(
            <div>
                <SiteHeader />
                <BannerComponent />
                <BlendsComponent />
                <GadgetComponent />
                <Footer />
            </div>
        );
    }
}

export default IndexContents;