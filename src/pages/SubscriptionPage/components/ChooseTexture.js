import { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import "../styles/SubStyle.css";

function ChooseTexture({url}){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        Do you want ground coffee or whole beans?
                    </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12"> 
                                <Link to={`${url}/blend`} id="enzi-link">
                                    <div className="sub-select-btn" > 
                                        <span className="sub-select-btn-text"> Ground Coffee </span>
                                    </div> 
                                </Link>
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                            <Link to={`${url}/blend`} id="enzi-link">
                                    <div className="sub-select-btn" >
                                        <span className="sub-select-btn-text"> Whole Beans </span>
                                    </div> 
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTexture;