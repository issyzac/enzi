import { Button, Image } from "react-bootstrap";
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

function ChooseGadgetComponent(){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        How do you usually make your coffee? </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={aeropress} fluid width="50px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <h4 style={textStyle}> Aeropress </h4>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={frenchpress} fluid width="90px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> Frenchpress/Plunger </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={electricDrip} fluid width="40px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> Electric Drip Machine </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={mokaPot} fluid width="150px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> Moka Pot </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={chemex} fluid width="150px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> Chemex </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={v60} fluid width="150px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> V60 </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={esspressoMachine} fluid width="150px"/>
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> Esspresso Machine </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > 
                                    <div className="row">
                                        <div className="col-md-2">
                                            {/* <Image src={mokaPot} fluid width="150px" /> */}
                                        </div>
                                        <div className="col-md-10" style={{ textAlign: 'center', height: '100%' }}>
                                            <p style={textStyle}> I Simply Boil! </p>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGadgetComponent;