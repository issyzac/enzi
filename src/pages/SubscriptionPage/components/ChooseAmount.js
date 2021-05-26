import { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../styles/SubStyle.css';

function ChooseAmount ({url}) {
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '3rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        How many bags per delivery? </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12"> 
                                <Link to={`${url}/contact`} id="enzi-link" >
                                    <div className="sub-select-btn" > 
                                        1 Bag (500 grams) 
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Link to={`${url}/contact`} id="enzi-link">
                                    <div className="sub-select-btn" > 
                                        2 Bags (1 Kg) 
                                    </div> 
                                </Link>
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Link to={`${url}/contact`} id="enzi-link">
                                    <div className="sub-select-btn" > 
                                        3 Bags (1.5 Kg) 
                                    </div> 
                                </Link>
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Link to={`${url}/contact`} id="enzi-link">
                                    <div className="sub-select-btn" > 
                                        Other 
                                    </div> 
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseAmount;