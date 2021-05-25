import { Button, Image } from "react-bootstrap";
import blendMockupImage from '../../../images/blends/blend-mokup-straight.jpeg'
import blendMockupImageSlant from '../../../images/blends/blend-mokup-slant.jpeg'
import '../styles/SubStyle.css';

const enziButtonStyle = {
    border: '1px solid #202a44',
    // backgroundColor: '#f7f7f7',
    alignSelf: 'start',
    marginBottom: '1rem',
    marginRight: '1rem',
    // fontVariant: 'all-small-caps',
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

function ChooseBlend(){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}> 
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> 
                        Pick a blend
                    </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12"> 
                                <Button className='e-blend-button' variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Image src={blendMockupImage} fluid />
                                        </div>
                                        <div className="col-md-6" style={{ textAlign: 'center', height: '100%', marginTop: '3rem', marginBottom: '3rem' }}>
                                            <h1 style={{ fontFamily: 'Inter', fontWeight: '300', alignSelf: 'center' }}> Enzi </h1>
                                        </div>
                                    </div>    
                                </Button> 
                            </div>
                            <div className="col-md-6 col-sm-12"> 
                                <Button className='e-blend-button' variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Image src={blendMockupImageSlant} fluid />
                                        </div>
                                        <div className="col-md-6" style={{ textAlign: 'center', height: '100%', marginTop: '3rem', marginBottom: '3rem' }}>
                                            <h1 style={{ fontFamily: 'Inter', fontWeight: '300', alignSelf: 'center' }}> Enzi Lite</h1>
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

export default ChooseBlend;