import { Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

import blendMockupImage from '../../../images/blends/blend-mokup-straight.jpeg'
import blendMockupImageSlant from '../../../images/blends/blend-mokup-slant.jpeg'

import '../styles/SubStyle.css';

function ChooseBlend({url}){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}> 
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '3rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        Pick a blend
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-sm-12"> 
                            <Link to={`${url}/amount`} id="enzi-link">
                                <div className='sub-select-blend-btn' >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Image src={blendMockupImage} fluid />
                                        </div>
                                        <div className="col-md-6" style={{ textAlign: 'center', height: '100%', marginTop: '3rem', marginBottom: '3rem' }}>
                                            <span className="sub-select-blend-btn-text"> Enzi </span>
                                        </div>
                                    </div>    
                                </div> 
                            </Link>
                        </div>
                        <div className="col-md-6 col-sm-12"> 
                            <div className='sub-select-blend-btn'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Image src={blendMockupImageSlant} fluid />
                                    </div>
                                    <div className="col-md-6" style={{ textAlign: 'center', height: '100%', marginTop: '3rem', marginBottom: '3rem' }}>
                                        <span className="sub-select-blend-btn-text"> Enzi Lite </span>
                                    </div>
                                </div>    
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseBlend;