import InstagramEmbed from 'react-instagram-embed';
import './styles/InstagramEmbedStyles.css'

function InstagramFeedsComponent(){
    return(
        <div className="container-fluid" style={{ backgroundColor: '#f7f7f7', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <h1 className="title"> Stay Connected </h1>
                    <h5 className="subtitle"> Here's what's in our social media <a href="https://www.instagram.com/enzicoffee/"> @enzicoffee </a> </h5>
                </div>
                <div class="powr-instagram-feed" id="7c1c4dd2_1618667600"></div>
                <script src="https://www.powr.io/powr.js?platform=react">
                </script>

            </div>
        </div>
    )
}

export default InstagramFeedsComponent;