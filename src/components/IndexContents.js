import { Component } from 'react'
import BannerComponent from './BannerComponent'
import BlendsComponent from './BlendsComponent'
import SiteHeader from './HeaderComponent'

class IndexContents extends Component {
    render(){
        return(
            <div>
                <SiteHeader />
                <BannerComponent />
                <BlendsComponent />
            </div>
        );
    }
}

export default IndexContents;