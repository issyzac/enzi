import { Button, Image } from "react-bootstrap";
import { Link, useRouteMatch } from 'react-router-dom'

import '../styles/SubStyle.css';

import aeropress from '../res/aeropress.png';
import frenchpress from '../res/frenchpress.png';
import electricDrip from '../res/coffee-machine-drip.png';
import mokaPot from '../res/moka-pot.png';
import v60 from '../res/v60.png';
import chemex from '../res/chemex.png';
import esspressoMachine from '../res/esspresso-machine.png';

const enziButtonStyle = {
    border: '1px solid #202a44',
    color: '#202a44',
    alignSelf: 'start',
    marginBottom: '1rem',
    marginRight: '1rem',
    fontVariant: 'all-small-caps',
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '1.2rem',
    borderRadius: '2px',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    width: '100%',
  }

  const textStyle = {
    fontFamily: 'Poppins', 
    fontWeight: '500', 
    alignSelf: 'center', 
    fontSize: '22px'
  }

function ChooseGadgetComponent({url}){

    let match = useRouteMatch();

    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        How do you usually make your coffee? </p>
                        <div className="row">  
                            <GadgetItem name="Aeropress" icon={aeropress} url={url} />
                            <GadgetItem name="Frenchpress/Plunger" icon={frenchpress} url={url} />
                            <GadgetItem name="Moka Pot" icon={mokaPot} url={url} />
                            <GadgetItem name="Electric Drip Machine" icon={electricDrip} url={url} />
                            <GadgetItem name="Chemex" icon={chemex} url={url} />
                            <GadgetItem name="V60" icon={v60} url={url} />
                            <GadgetItem name="Esspresso Machine" icon={esspressoMachine} url={url} />
                            <GadgetItem name="I Simply Boil!" icon="" url={url} />
                        </div>

                        <div className="row" style={{ marginTop: '3rem' }}>
                            <div className="col-md-12">
                                <p className="subtitle" style={{ fontFamily: 'Spartan', fontWeight: '300', marginTop: '5rem', fontSize: '40px', textAlign: 'start', lineHeight: '3rem' }}> 
                                    Dont have any gadget? Check out our gadget store for some great deals on coffeewares!
                                </p>
                                <div style={{ marginTop: '1rem', textAlign: 'start' }}>
                                    <Link  to="/gadgetsware" style={{ textDecoration: 'none' }}>
                                        <div id="shop-gadget-button" className="shop-gadget-button"> Shop Gadgets </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


function GadgetItem({name, icon, url}){
    return(
        <div className="col-md-6 col-sm-12"> 
            <Link to={`${url}/texture`}>
                <Button variant='outline-dark' style={enziButtonStyle} > 
                    <div className="row">
                        <div className="col-md-2">
                            <Image src={icon} fluid width="50px"/>
                        </div>
                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                            <h4 style={textStyle}> {name} </h4>
                        </div>
                    </div>    
                </Button> 
            </Link>
        </div>
    )
}

export default ChooseGadgetComponent;