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
                            <AmountItem title="2 Bags (1 Kg)" url={url} />
                            <AmountItem title="4 Bags (2 Kg)" url={url} />
                            <AmountItem title="6 Bags (3 Kg)" url={url} />
                            <AmountItem title="Other" url={url} />
                        </div>
                </div>
            </div>
        </div>
    )
}

function  AmountItem({title, url}) {
    return (
        <div className="col-md-6 col-sm-12"> 
            <Link to={`${url}/contact`} id="enzi-link">
                <div className="sub-select-btn" style={{ paddingTop: '2rem', paddingBottom: '3rem' }} > 
                    {title}
                </div> 
            </Link>
        </div>
    )
}

export default ChooseAmount;