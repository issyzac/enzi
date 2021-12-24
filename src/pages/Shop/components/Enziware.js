
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga4';

const textStyle  = {
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontSize: '18px',
    color: '#202a44',
    textAlign: 'center'
}

const priceStyle = {
    ...textStyle,
    color: 'grey',
    marginLeft: '5%',
    marginRight: '5%',
    fontWeight: '400'
}

const selectedItem = (item) => {
    ReactGA.event({
        category: "Shop",
        action: "Buy Gadget",
        label: item, // optional
        value: 1, // optional, must be a number
      });
}


export default function Enziware({name, price, image}){

    function handleItemSelection(e){
        selectedItem(name)
    }

    return (    
        <div className="container">
            <Link to="#" onClick={handleItemSelection}>
                <div className="row gadget" style={{ margin: '0px' }}>
                    <Image src={ image } fluid className="gadget-image"/>
                    <div className="overlay"></div>
                </div>
            </Link>
            <div className="row d-flex justify-content-center" style={{ height: '30%', marginTop: '30px' }}>
                <div className="d-flex justify-content-center">
                    <h3 style={textStyle}> {name} </h3>
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{ height: '10%' }}>
                <div className="d-flex justify-content-center">
                    <h3 style={priceStyle}> {price} </h3>
                </div>
            </div>
        </div>
    ); 
}