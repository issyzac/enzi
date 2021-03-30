import { Component } from 'react'
import BannerComponent from './BannerComponent'
import SiteHeader from './HeaderComponent'

class IndexContents extends Component {
    render(){
        return(
            <div>
                <SiteHeader />
                <BannerComponent />
            </div>
        );
    }
}

export default IndexContents;