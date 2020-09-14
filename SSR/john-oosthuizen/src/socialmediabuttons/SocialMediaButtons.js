import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";

function SocialMediaButtons(props) {
    return (
        <div>
          <FacebookShareButton 
                url={"http://www.johnoosthuizen.co.za"}
                quote={"Music Theory Online Tuition from Stellenbosch"}
                hashtag="#MusicTheoryOnline"
                className={SocialMediaButtons}>
              <FacebookIcon size={24} />
           </FacebookShareButton>
           <WhatsappShareButton
                url={"http://www.johnoosthuizen.co.za"}
                quote={"Music Theory Online Tuition from Stellenbosch"}
                hashtag="#MusicTheoryOnline"
                className={SocialMediaButtons}>
                <WhatsappIcon size={24} />
            </WhatsappShareButton>
        </div>    
    );
}

export default SocialMediaButtons;