import { Component } from 'react';
import { Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

import "../styles/SubStyle.css";

import groundCoffeeImage from '../res/answer-ground.svg';
import wholeBeansImage from '../res/answer-whole-bean.svg';
import mixGroundAndWholeImage from '../res/answer-ground-and-whole-bean.svg';

function ChooseTexture({url}){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ marginBottom: '3rem', fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        Do you want ground coffee or whole beans?
                    </p>
                    <div className="row">
                        <TextureItem name="Ground Coffee" icon={groundCoffeeImage} url={url} />
                        <TextureItem name="Whole Beans" icon={wholeBeansImage} url={url} />
                        <TextureItem name="Mix" icon={mixGroundAndWholeImage} url={url} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function TextureItem({name, icon, url}){
    return(
        <div className="col-md-6 col-sm-12"> 
            <Link to={`${url}/blend`} id="enzi-link">
                <div className="sub-select-btn" style={{ alignContent: 'center' }}> 
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="col-md-3">
                            <Image src={icon} fluid />
                        </div>
                        <div className="col-md-9" style={{ textAlign: 'center', height: '100%' }}>
                            <span className="sub-select-btn-text"> {name} </span>
                        </div>
                    </div>
                </div> 
            </Link>
        </div>
    )
}

export default ChooseTexture;