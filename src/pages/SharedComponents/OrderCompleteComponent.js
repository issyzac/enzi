import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }

export default function OrderCompleteComponent({message}){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" 
                        style={{ 
                            fontFamily: 'Inter', 
                            fontWeight: '900', 
                            color: '#202a44', 
                            fontSize: '72px', 
                            textAlign: 'start', 
                            lineHeight: '5rem'}}>

                        {message}

                    </p>
                    <p className="subtitle" style={{ fontFamily: 'Spartan', fontWeight: '300', marginTop: '5rem', fontSize: '40px', textAlign: 'start', lineHeight: '3rem' }}> 
                        We will get in touch for payment and delivery! </p>
                    <div style={{ marginTop: '5rem', textAlign: 'start' }}>
                        <Link to={`/`}>
                            <Button variant='outline-dark' style={enziButtonStyle} > Finish </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}