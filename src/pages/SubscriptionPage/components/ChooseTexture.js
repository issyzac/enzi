import { Component } from 'react';
import { Button } from "react-bootstrap";

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

function ChooseTexture(){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        Do you want ground coffee or whole beans?
                    </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > Ground Coffee </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > Whole Beans </Button> 
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTexture;