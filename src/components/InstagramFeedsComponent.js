import React, { useEffect } from 'react';

import './styles/InstagramEmbedStyles.css';

function InstagramFeedsComponent(){

    useEffect(()=> {
        
        loadScript("https://www.powr.io/powr.js?platform=react", () => {
            let powrMarkClass = document.getElementsByClassName("powrMark__logo-block");
            console.log("Script has run");
            console.log(powrMarkClass);
        });
        
        // const powrMarkClass = document.getElementsByClassName('powrMarkLink');
        // console.log("POWER MARK ");
        // console.log(powrMarkClass);
        // powrMarkClass[0].style.display = "none";
    });

    return(
        <div className="container-fluid" id="connect" style={{ backgroundColor: '#f7f7f7', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '50px'}}>
                    <h1 className="title" style={{ fontFamily: 'Poppins', fontWeight: '700', color: '#202a44' }}> Stay Connected </h1>
                    <h5 className="subtitle" style={{ fontFamily: 'Poppins' }}> Follow us on Instagram <a href="https://www.instagram.com/enzicoffee/"> @enzicoffee </a> </h5>
                </div>
                <div class="powr-instagram-feed" id="7c1c4dd2_1618667600"></div>
            </div>
        </div>
    )
}

function loadScript( url, callback ) {
    var script = document.createElement( "script" )
    script.type = "text/javascript";
    if(script.readyState) {  // only required for IE <9
      script.onreadystatechange = function() {
        if ( script.readyState === "loaded" || script.readyState === "complete" ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  //Others
      script.onload = function() {
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByClassName( "powr-instagram-feed" )[0].appendChild(script);
    // document.getElementsByTagName( "head" )[0].appendChild( script );
  }

export default InstagramFeedsComponent;