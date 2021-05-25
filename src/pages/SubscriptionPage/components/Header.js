import { Button } from "react-bootstrap";
import '../../../components/styles/enziStyles.css';

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

function HeaderComponent(){
    return(
        <div className="container-fluid" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <p className="title" style={{ fontFamily: 'Inter', fontWeight: '900', color: '#202a44', fontSize: '72px', textAlign: 'start', lineHeight: '5rem'}}> Customise your <br />Subscription! </p>
                    <p className="subtitle" style={{ fontFamily: 'Poppins !important', fontWeight: '200', marginTop: '5rem', fontSize: '40px', textAlign: 'start', lineHeight: '3rem' }}> 
                        Your favorite coffee exactly how you want it, every first week of the month! </p>
                    <div style={{ marginTop: '5rem', textAlign: 'start' }}>
                        <Button variant='outline-dark' href="https://wa.me/255683321768" style={enziButtonStyle} > Get Started </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;