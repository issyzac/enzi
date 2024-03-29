import React, {useEffect} from 'react'
import Enziware from './components/Enziware'
import { Image } from 'react-bootstrap'

import ReactGa from 'react-ga4';

const headerTextStyle  = {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '40px',
    // color: '#202a44',
    color: '#db7f3b',
    textAlign: 'start'
}

const bannerStyle= {  
    backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/banners%2Fgadgets-shop-banner.jpeg?alt=media&token=d08ac88d-1282-4d42-a431-670ad09596ed" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '400px'
  }

export default function BuyGadget({url}){


    useEffect(() => {
        ReactGa.send({ hitType: "pageview", page: {url} });
        window.scrollTo(0,0);
    }, [])

    return(
       <div className="container">
           <div className="row" style={{ marginTop: '30px' }}>
               <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <div className="">
                        <h4 className="align-middle" style={headerTextStyle}> Enziwares - Coffee Gadgets! </h4>
                        <p style = {{ textAlign: 'left', fontSize: '18px', marginTop: '20px', fontFamily: 'Poppins' }}>
                            Elevate your home brew. At Enziwares Gadgets Shop we help you elevate your 
                            at home coffee experience. We help you awaken your inner barista by providing 
                            you the tools to up your coffee game.  
                        </p>
                    </div>
               </div>   
               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={bannerStyle}></div>
           </div>
            <div className="row" style={{ marginTop: '40px', marginBottom: '30px' }}> 
                <div style={{ backgroundColor: '#000000', height: '1px', width: '100%', marginLeft: '50px', marginRight: '50px'}}></div>
            </div>
           <div className="row" style={{ paddingBottom: '50px' }}>
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Enziware 
                    name="Stainless Steel French Press"
                    price = "115,000/="
                    image = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/french-press-2.jpg?alt=media&token=00ad0877-8000-4b6a-8e8f-c0ee5e801b48"/>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Enziware 
                    name="Moka Pot"
                    price = "50,000/="
                    image = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/moka-pot-2.jpg?alt=media&token=cdd1d088-9ea6-4a77-b368-d5635cf40a4c"/>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Enziware 
                    name="Portable Esspresso Maker (Aeropress)"
                    price = "100,000/="
                    image="https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/aropress-2.jpg?alt=media&token=4a212d60-848e-442b-a4cc-4eaf51e5ada3" />
               </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Enziware 
                        name="Manual Coffee Grinder"
                        price = "50,000/="
                        image = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/grinder-2.jpg?alt=media&token=002c4fd6-2abf-41f5-a9de-cb056e2c6036"/>
                </div>
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Enziware 
                    name="Adjustable Electric Burr Grinder"
                    price = "80,000"
                    image = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/electric-grinder.jpg?alt=media&token=251dd6cb-7b0f-4daf-88d8-2be56f01eb9e" />
               </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Enziware 
                        name="Aeropress"
                        price = "100,000"
                        image = "https://firebasestorage.googleapis.com/v0/b/enzi-website.appspot.com/o/aeropress.jpg?alt=media&token=6460d4b6-0bed-420f-8020-7dfb3e6ab548" />
                </div>
            </div>
       </div>
    )
}