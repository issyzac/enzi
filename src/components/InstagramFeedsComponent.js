import InstagramEmbed from 'react-instagram-embed';
import './styles/InstagramEmbedStyles.css'

function InstagramFeedsComponent(){
    return(
        <div className="container-fluid" style={{ backgroundColor: '#f7f7f7', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <h1 className="title"> Stay Connected </h1>
                    <h5 className="subtitle"> Follow us on Instagram </h5>
                </div>
                <div className="row">
                    <div className="col-md-4">
                            <div style={{  }}>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/CNBJ7yLDSkH/'
                                    clientAccessToken='460297381974247|65bce5f9f05540a62db19a1515839948'
                                    hideCaption={true}
                                    maxWidth={150}
                                    containerTagName='div'
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{  }}>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/CMSbFSXDGQ5/'
                                    clientAccessToken='460297381974247|65bce5f9f05540a62db19a1515839948'
                                    hideCaption={true}
                                    maxWidth={150}
                                    containerTagName='div'
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{  }}>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/CL6VIXrDOWn/'
                                    clientAccessToken='460297381974247|65bce5f9f05540a62db19a1515839948'
                                    hideCaption={true}
                                    maxWidth={150}
                                    containerTagName='div'
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                                />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramFeedsComponent;